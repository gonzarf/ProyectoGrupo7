import { HttpClient, HttpHeaders } from "@angular/common/http";
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
      //const header = new HttpHeaders();

      return this.http.get<Product[]>(`${this.url}`);
    }

    createProduct(producto:Product){

      let body = JSON.stringify(producto);
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



  }