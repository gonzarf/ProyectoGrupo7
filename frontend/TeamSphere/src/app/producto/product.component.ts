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

  imageUrl:String = "";

  constructor(private userService: UserService, private router: Router){}


  ngOnInit(): void {
    
    //Hay que hacer esto para que obtenga bien la lista de urls
    if (typeof this.product.image === 'string') {
      let imageString = this.product.image as unknown as string;
      imageString = imageString.slice(1, -1);
      this.product.image = imageString.split(',').map(url => url.trim());
    }

    this.imageUrl = this.product.image[0];
    console.log("👽👽👽👽👽👽👽" +this.product.seller)
    this.userService.getuserById(this.product.seller!).subscribe(data =>{

      this.user = data;
      console.log("👽👽👽👽👽👽👽" + this.user.email)
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
