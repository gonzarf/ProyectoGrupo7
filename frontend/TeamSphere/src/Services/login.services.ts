import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Usuario } from "../app/login/usuario.model";
import { LoginDTO } from "../app/login/loginDTO.model";

@Injectable({
    providedIn: 'root',
})

export class LoginServices {
    private url = 'http://localhost:8081/user';
    constructor (private http: HttpClient){

    }

    login (logindto:LoginDTO): Observable<Usuario> {
        const header = new HttpHeaders()

        return this.http.post<Usuario>(`${this.url}/login`, logindto, {headers:header})
    }
}
