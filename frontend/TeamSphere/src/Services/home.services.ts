import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Usuario } from "../app/login/usuario.model";
import { LoginDTO } from "../app/login/loginDTO.model";
import { Noticia } from "../app/noticia/noticia.model";

@Injectable({
    providedIn: 'root',
})

export class HomeServices {
    private url = 'http://localhost:8081/post';
    constructor (private http: HttpClient){

    }

    // LLamada para recoger todos los post de tipo noticia
    loadNews (): Observable<Array<Noticia>> {
        const header = new HttpHeaders()

        return this.http.get<Array<Noticia>>(`${this.url}/all`)
    }
}