import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgIf } from '@angular/common';

import { SideBarComponent } from "../side-bar/side-bar.component";
import { ProductComponent } from "../producto/product.component";
import { NavbarComponent } from "../navbar/navbar.component";
import { SortBarComponent } from "../sort-bar/sort-bar.component";
import { Product } from '../producto/producto.model';
import { ProductService } from '../../Services/product.service';
import { UserService } from '../../Services/user.service';
import { User } from '../social/social.model';


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

  constructor(private productService: ProductService, private userService:UserService) {}

  title = "Compra / Venta";

  isFormVisible = false;




  name! : String;
  desc! : String
  price! : number
  imageUrl! : String[]

  selectedFiles: File[] = [];


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
    this.price = Number(numericValue);
  }
    
  toggleForm() {
    this.isFormVisible = !this.isFormVisible;
  }


  currentUser! : User;

  createProduct() {

    this.userService.getCurrentUser().subscribe((data) => {


      let product: Product = {
        name: this.formData.name,
        description: this.formData.desc,
        price: this.formData.price,
        image: this.formData.image,
        seller: data.id
      };

      this.productService.createProduct(product, this.selectedFiles).subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.error(error);
        }
      );

      window.location.reload();
    });

    
  }

  cancel() {
    this.isFormVisible = false;
  }

  handleImageUpload(event: any) {
    if (event.target.files && event.target.files.length) {
      this.selectedFiles = Array.from(event.target.files);
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
