import { Component } from '@angular/core';
import { AprendizService } from './service/aprendiz.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'api-ag-jess';

  constructor(
    private aprendizService:AprendizService
  ) {

    this.aprendizService.getAprendiz().subscribe(resp => {
      console.log(resp)
    })
  } 


  }

