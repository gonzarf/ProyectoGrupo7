import { Component, Input, OnInit} from '@angular/core';
import { NavigationExtras, Router, RouterLink } from '@angular/router';
import { Product } from './producto.model';
import { NgForOf } from '@angular/common';
import { Usuario } from '../login/usuario.model';
import { UserService } from '../../Services/user.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [ProductComponent, RouterLink, NgForOf],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit{

  
  @Input() product!: Product;

  user: Usuario = new Usuario;

  constructor(private userService: UserService, private router: Router){}


  ngOnInit(): void {

    this.userService.getuserById(this.product.seller).subscribe(data =>{

      this.user = data;

    })

  }


  

  productDetail() {

    let navigationExtras: NavigationExtras = {
      state: {
        product: this.product,
        user: this.user
      }
    };

    this.router.navigate(['/item'], navigationExtras);

  };

}
