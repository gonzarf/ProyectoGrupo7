import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Desplazamiento, DesplazamientoExistente } from '../app/desplazamientos/desplazamiento.model';
import { Binary } from '@angular/compiler';

@Injectable({
  providedIn: 'root',
})
export class DisplacementServices {
  private url = 'http://localhost:8081/post';
  constructor(private http: HttpClient) {}


  // LLamada para recoger todos los post de tipo noticia
  loadDisplacement(): Observable<Array<DesplazamientoExistente>> {
    const header = new HttpHeaders();

    return this.http.get<Array<DesplazamientoExistente>>(`${this.url}/all`);
  }
  createDisplacement(desplazamiento:Desplazamiento){
    
    let body = JSON.stringify(desplazamiento);
    console.log(body);
    
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
  putDisplacement(desplazamientoE: DesplazamientoExistente){
    let body = JSON.stringify(desplazamientoE);
    const headers = new HttpHeaders().set('Content-Type','application/json');
    console.log(body);
    
    
    return this.http.put(`${this.url}/update/${desplazamientoE.id}`,body,{headers:headers}).subscribe(
      (response) => {
        console.log(response);
        
      },
      (error) => {
        console.error(error);
        
      }
    );
  }

  deleteDisplacement(desplazamientoE: DesplazamientoExistente){
    
    return this.http.delete(`${this.url}/delete/`+desplazamientoE.id).subscribe(
      (response) => {
        console.log(response);
        
      },
      (error) => {
        console.error(error);
        
      }
    );
    
  }



}
