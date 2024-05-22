import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Product } from "../app/producto/producto.model";

@Injectable({
    providedIn: 'root'
  })
  export class ProductService {

    private url = 'http://localhost:8081/product/';

    constructor(private http: HttpClient) {}

    //Obtener lista de productos

    getProducts():Observable<Product[]>{
        return this.http.get<Product[]>(`${this.url}`);
    }

  }