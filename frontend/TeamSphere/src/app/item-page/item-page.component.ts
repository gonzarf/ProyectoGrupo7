import { Component, OnInit } from '@angular/core';
import { SideBarComponent } from "../side-bar/side-bar.component";
import { NavbarComponent } from "../navbar/navbar.component";
import { Product } from '../producto/producto.model';
import { Usuario } from '../login/usuario.model';



@Component({
    selector: 'app-item-page',
    standalone: true,
    templateUrl: './item-page.component.html',
    styleUrl: './item-page.component.css',
    imports: [SideBarComponent, NavbarComponent],
})
export class ItemPageComponent implements OnInit{

  product! :Product;
  user:Usuario = new Usuario;

  ngOnInit(): void {
    this.product = history.state.product;
    this.user = history.state.user;
  }


  
  currentImageIndex = 0;

  showImage(index: number) {
    this.currentImageIndex = index;
  }

  prevImage() {
    this.currentImageIndex = (this.currentImageIndex - 1 + this.product.image.length) % this.product.image.length;
  }

  nextImage() {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.product.image.length;
  }
  
}
