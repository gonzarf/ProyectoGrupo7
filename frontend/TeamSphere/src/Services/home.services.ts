import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Noticia, NoticiaExistente } from '../app/noticia/noticia.model';

@Injectable({
  providedIn: 'root',
})

export class HomeServices {
  private url = 'http://localhost:8081/post';
  constructor(private http: HttpClient) {}


  // LLamada para recoger todos los post de tipo noticia
  loadNews(): Observable<Array<NoticiaExistente>> {
    const header = new HttpHeaders();

    return this.http.get<Array<NoticiaExistente>>(`${this.url}/all`);
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
  putNew(noticiaE: NoticiaExistente){
    let body = JSON.stringify(noticiaE);
    const headers = new HttpHeaders().set('Content-Type','application/json');
    console.log(body);
    
    
    return this.http.put(`${this.url}/update/${noticiaE.id}`,body,{headers:headers}).subscribe(
      (response) => {
        console.log(response);
        
      },
      (error) => {
        console.error(error);
        
      }
    );
  }

  searchPosts(searchText: string): Observable<NoticiaExistente[]> {
    console.log(`${this.url}/search?query=${searchText}`)
    return this.http.get<NoticiaExistente[]>(`${this.url}/search?query=${searchText}`);
  }



}
