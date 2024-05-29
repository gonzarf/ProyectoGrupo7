import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Noticia } from '../app/noticia/noticia.model';
import { User } from '../app/social/social.model';

@Injectable({
  providedIn: 'root',
})
export class SocialServices {
  private url = 'http://localhost:8081/user';
  constructor(private http: HttpClient) {}


  // LLamada para recoger todos los post de tipo noticia
  loadUser(): Observable<Array<User>> {
    const header = new HttpHeaders();

    return this.http.get<Array<User>>(`${this.url}`);
  }
  postNews(user:User){
    
    let body = JSON.stringify(user);
    const headers = new HttpHeaders().set('Content-Type','application/json');
    return this.http.post(`${this.url}`,body,{headers:headers}).subscribe(
      (response) => {
        console.log(response);
        
      },
      (error) => {
        console.error(error);
        
      }
    );
  }



}
