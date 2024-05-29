import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../app/login/usuario.model';
import { LoginDTO } from '../app/login/loginDTO.model';

@Injectable({
  providedIn: 'root',
})
export class LoginServices {
  private url = 'http://localhost:8081/auth';
  constructor(private http: HttpClient) {}

    login (logindto:LoginDTO): Observable<any> {
        const headers = new HttpHeaders({'Content-Type':'application/json'});

        return this.http.post<any>(`${this.url}/signin`, logindto, {headers})
    }
}
