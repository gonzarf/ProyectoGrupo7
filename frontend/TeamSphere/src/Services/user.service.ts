import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../app/login/usuario.model';


@Injectable({
  providedIn: 'root',
})
export class UserService {

  private url = 'http://localhost:8081/user';

  constructor(private http: HttpClient) {}


  getuserById (id:string): Observable<Usuario> {

    return this.http.get<Usuario>(`${this.url}/${id}`);
  }

  getCurrentUser(): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.url}/me/profile`);
  }

  deleteProfile(): Observable<any>{
    return this.http.delete(`${this.url}/me/profile`);
  }

  updateProfile(formData: FormData): Observable<any> {
    return this.http.put(`${this.url}/me/profile`, formData);
  }
}
