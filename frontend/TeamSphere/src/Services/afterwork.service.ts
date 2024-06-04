import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Noticia } from "../app/noticia/noticia.model";
import { Afterwork, AfterworkExistente } from "../app/afterwork/afterwork.model";
import { Observable } from "rxjs";
import { after } from "node:test";

@Injectable({
    providedIn: 'root',
  })
  export class AfterworkServices {
    private url = 'http://localhost:8081/post';
    constructor(private http: HttpClient) {}
  
  
    // LLamada para recoger todos los post de tipo noticia
    loadAfterwork(): Observable<Array<AfterworkExistente>> {
      //const header = new HttpHeaders();
     this.http.get<Array<AfterworkExistente>>(`${this.url}/all`).forEach(element => {
        console.log(element);
        
      })
      
      return this.http.get<Array<AfterworkExistente>>(`${this.url}/all`);
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

    putAfterwork(afterworkE: AfterworkExistente){
      let body = JSON.stringify(afterworkE);
      const headers = new HttpHeaders().set('Content-Type','application/json');
      console.log(body);
      
      
      return this.http.put(`${this.url}/update/${afterworkE.id}`,body,{headers:headers}).subscribe(
        (response) => {
          console.log(response);
          
        },
        (error) => {
          console.error(error);
          
        }
      );
    }

    deleteAfterwork(afterwork: AfterworkExistente){
    
      return this.http.delete(`${this.url}/delete/`+afterwork.id).subscribe(
        (response) => {
          console.log(response);
          
        },
        (error) => {
          console.error(error);
          
        }
      );
      
    }
  
  
  
  }
  