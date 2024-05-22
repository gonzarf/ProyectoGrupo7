import { Component, OnInit } from '@angular/core';
import { SideBarComponent } from "../side-bar/side-bar.component";
import { ProductComponent } from "../producto/product.component";
import { NavbarComponent } from "../navbar/navbar.component";
import { SortBarComponent } from "../sort-bar/sort-bar.component";
import { Product } from '../producto/producto.model';
import { ProductService } from '../../Services/product.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
    selector: 'app-compra-venta',
    standalone: true,
    templateUrl: './compra-venta.component.html',
    styleUrl: './compra-venta.component.css',
    imports: [SideBarComponent, ProductComponent, NavbarComponent, SortBarComponent, CommonModule, HttpClientModule]
})
export class CompraVentaComponent implements OnInit{
    title = "Compra / Venta";

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
