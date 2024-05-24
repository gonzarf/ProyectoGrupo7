import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgIf } from '@angular/common';

import { SideBarComponent } from "../side-bar/side-bar.component";
import { ProductComponent } from "../producto/product.component";
import { NavbarComponent } from "../navbar/navbar.component";
import { SortBarComponent } from "../sort-bar/sort-bar.component";
import { Product } from '../producto/producto.model';
import { ProductService } from '../../Services/product.service';


@Component({
    selector: 'app-compra-venta',
    standalone: true,
    templateUrl: './compra-venta.component.html',
    styleUrl: './compra-venta.component.css',
    imports: [SideBarComponent, ProductComponent, 
        NavbarComponent, SortBarComponent,
        FormsModule, CommonModule]
})

export class CompraVentaComponent implements OnInit{
    productService: any;
    constructor(private service: ProductService) {}

    title = "Compra / Venta";

    isFormVisible = false;


    imageUrl!: File;
    imageUrls!: [];

    name= '';
    desc= '';
    price!:number ;
    image!: [];

  
    formData = {
        name: '',
        desc: '',
        price: 0 ,
        image: []
    };

    toggleForm() {
        this.isFormVisible = !this.isFormVisible;
    }

    createProduct() {
        const name = this.formData.name;
        const desc = this.formData.desc;
        const price = this.formData.price;
        const image = this.formData.image;

        
        let currentDate = new Date();
        let formattedDate = currentDate.toISOString().split('T')[0]; // Formato: YYYY-MM-DD

        let producto: Product = {
            name: this.name,
            description: this.desc,
            price: this.price,
            image: this.image,
            date: formattedDate,
            seller: 0,
            buyer: 0
        };


      
          this.service.createProduct(producto);
          window.location.reload();
    }

    cancel() {
        this.isFormVisible = false;
    }

    handleImageUpload(event: any) {
        const files = event.target.files;
        const imageUrls: string[] = [];
        for (const file of files) {
            const imageUrl = 'https://ruta-de-la-imagen.com/imagen.jpg'; // Cambia esto con la URL real
            imageUrls.push(imageUrl);
        }
    }
    
    

    products!: Product[];

  
  
    ngOnInit(): void {
      this.getProducts();
    }
  
    getProducts(): void {
  
      this.productService.getProducts().subscribe((data: Product[]) => {
        this.products = data;
        
      });
    }
}
