import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Usuario } from "../app/login/usuario.model";

@Injectable({
    providedIn: 'root',
})

export class LoginServices {
    private url = 'http://localhost:8081/teamsphere';
    constructor (private http: HttpClient){

    }

    login = async (email:string): Promise<Usuario> =>{
        return this.http.get(`${this.url}/${email}`).toPromise()as Promise<Usuario>;
    }
}
