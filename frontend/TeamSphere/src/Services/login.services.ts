import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginDTO } from '../app/login/loginDTO.model';
import { Token } from '../app/login/token.model';
@Injectable({
  providedIn: 'root',
})
export class LoginServices {
  private url = 'http://localhost:8081/auth';

  constructor(private http: HttpClient) {}

  login(logindto: LoginDTO): Observable<Token> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.post<Token>(`${this.url}/signin`, logindto, { headers });
  }
}
