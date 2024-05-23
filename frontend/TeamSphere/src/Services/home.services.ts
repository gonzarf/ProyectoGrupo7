import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Noticia } from '../app/noticia/noticia.model';

@Injectable({
  providedIn: 'root',
})
export class HomeServices {
  private url = 'http://localhost:8081/post';
  constructor(private http: HttpClient) {}


  // LLamada para recoger todos los post de tipo noticia
  loadNews(): Observable<Array<Noticia>> {
    const header = new HttpHeaders();

    return this.http.get<Array<Noticia>>(`${this.url}/all`);
  }
  postNews(noticia:Noticia){
    
    let body = JSON.stringify(noticia);
    const headers = new HttpHeaders().set('Content-Type','application/json');
    return this.http.post(`${this.url}/add`,body,{headers:headers}).subscribe(
      (response) => {
        console.log(response);
        
      },
      (error) => {
        console.error(error);
        
      }
    );
  }



}
