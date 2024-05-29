import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../app/login/usuario.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  private url = 'http://localhost:8081/user';

  constructor(private http: HttpClient) {}


  getuserById (id:number): Observable<Usuario> {

    return this.http.get<Usuario>(`${this.url}/${id}`);
  }

  deleteProfile(): Observable<any>{
    return this.http.delete(`${this.url}/me/profile`);
  }

}
