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

    createProduct(product: Product, files: File[]): Observable<any> {
      const formData: FormData = new FormData();
      
      // Agrega el objeto del producto como una cadena JSON
      formData.append('product', JSON.stringify(product));

      // Agrega los archivos al FormData
      files.forEach((file, index) => {
          formData.append('file', file, file.name);
      });

      return this.http.post(this.url, formData, {
          headers: new HttpHeaders({
              'Accept': 'application/json'
          })
      });
    }



  }