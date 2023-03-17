import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AprendizService {
  url = ''
  constructor(
    private Http: HttpClient
  ) {
    console.log('holaaa')
     } 
  getAprendiz() {
    let header = new HttpHeaders()
    .set('Type-content', 'aplication/json')

    return this.Http.get(this.url, {
        headers: header
      });
      
    } 
    
  }
