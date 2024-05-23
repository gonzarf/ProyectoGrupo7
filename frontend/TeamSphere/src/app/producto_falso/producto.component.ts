import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from '../producto/producto.model';
import { ProductService } from '../../Services/product.service';
import { log } from 'console';

@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent implements OnInit{

  products!: Product[];

  constructor(private productService: ProductService) { }


  ngOnInit(): void {
    this.getProducts();
    console.log(this.products);
  }

  getProducts() {

    this.productService.getProducts().subscribe((data) => {
      this.products = data;
    });
    
  }

}
