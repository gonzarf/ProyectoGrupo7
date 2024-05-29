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

    constructor(private productService: ProductService) {}

    title = "Compra / Venta";

    isFormVisible = false;


    imageUrl!: File;
    imageUrls: any[] = [];

    name= '';
    desc= '';
    price!: number;
    image: any[] = [];

  
    formData = {
        name: '',
        desc: '',
        price: 0,
        image: []
    };

    onPriceInput(event: Event): void {
        const input = event.target as HTMLInputElement;
        const value = input.value;

        const numericValue = value.replace(/[^0-9]/g, '');
        input.value = numericValue;
        this.formData.price = Number(numericValue);
      }
      
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


      
          this.productService.createProduct(producto);
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
  
      this.productService.getProducts().subscribe((data) => {
        this.products = data;
        
      });
    }
}
