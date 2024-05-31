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

  login(logindto: LoginDTO): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.post<any>(`${this.url}/signin`, logindto, { headers });
  }

  register(formData: FormData): Observable<any> {
    return this.http.post(`${this.url}/signup`, formData);
    console.log(formData);
  }
}
