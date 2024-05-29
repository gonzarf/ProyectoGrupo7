import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Afterwork } from "../app/afterwork/afterwork.model";
import { Observable } from "rxjs";
import { after } from "node:test";

@Injectable({
    providedIn: 'root',
  })
  export class AfterworkServices {
    private url = 'http://localhost:8081/post';
    constructor(private http: HttpClient) {}
  
  
    // LLamada para recoger todos los post de tipo noticia
    loadAfterwork(): Observable<Array<Afterwork>> {
      const header = new HttpHeaders();
  
      return this.http.get<Array<Afterwork>>(`${this.url}/all`);
    }
    postAfterwork(afterwork:Afterwork){
      console.log(afterwork);
      
      let body = JSON.stringify(afterwork);
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
  