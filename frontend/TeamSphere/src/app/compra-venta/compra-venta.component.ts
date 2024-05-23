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
    title = "Compra / Venta";
    imageUrl!: File;
    imageUrls!: [];

    isFormVisible = false;
  
    formData = {
        name: '',
        desc: '',
        price: '',
        image: ''
    };

    toggleForm() {
        this.isFormVisible = !this.isFormVisible;
    }

    create() {
        const name = this.formData.name;
        const desc = this.formData.desc;
        const price = this.formData.price;
        const image = this.formData.image;
        
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

    constructor(private productService: ProductService) { }
  
  
    ngOnInit(): void {
      this.getProducts();
    }
  
    getProducts() {
  
      this.productService.getProducts().subscribe((data) => {
        this.products = data;
      });
    }
}
