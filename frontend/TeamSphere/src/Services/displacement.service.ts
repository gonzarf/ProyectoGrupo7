import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Desplazamiento } from '../app/desplazamientos/desplazamiento.model';

@Injectable({
  providedIn: 'root',
})
export class DisplacementServices {
  private url = 'http://localhost:8081/post';
  constructor(private http: HttpClient) {}


  // LLamada para recoger todos los post de tipo noticia
  loadDisplacement(): Observable<Array<Desplazamiento>> {
    const header = new HttpHeaders();

    return this.http.get<Array<Desplazamiento>>(`${this.url}/all`);
  }
  createDisplacement(desplazamiento:Desplazamiento){
    
    let body = JSON.stringify(desplazamiento);
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
