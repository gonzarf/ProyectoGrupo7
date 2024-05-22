import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgIf } from '@angular/common';

import { SideBarComponent } from "../side-bar/side-bar.component";
import { ItemComponent } from "../item/item.component";
import { NavbarComponent } from "../navbar/navbar.component";
import { SortBarComponent } from "../sort-bar/sort-bar.component";


@Component({
    selector: 'app-compra-venta',
    standalone: true,
    templateUrl: './compra-venta.component.html',
    styleUrl: './compra-venta.component.css',
    imports: [SideBarComponent, ItemComponent, 
        NavbarComponent, SortBarComponent,
        FormsModule, CommonModule]
})
export class CompraVentaComponent  implements OnInit{

    constructor() {

    }

    title = "Compra / Venta";
    imageUrl!: File;
    imageUrls!: [];

    isFormVisible = false;
  
    formData = {
        name: '',
        desc: '',
        price: '',
        date: '',
        image: ''
    };

    toggleForm() {
        this.isFormVisible = !this.isFormVisible;
    }

    create() {
        const name = this.formData.name;
        const desc = this.formData.desc;
        const price = this.formData.price;
        const date = this.formData.date;
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
    

    
    ngOnInit(): void {
        
    }
    

    
}
