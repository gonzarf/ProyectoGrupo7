import { Component } from '@angular/core';
import { SideBarComponent } from "../side-bar/side-bar.component";
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
    selector: 'app-item-page',
    standalone: true,
    templateUrl: './item-page.component.html',
    styleUrl: './item-page.component.css',
    imports: [SideBarComponent, NavbarComponent]
})
export class ItemPageComponent {
  title = "Item";
  user = "Paco";
  img_route = "https://assetscdn1.paytm.com/images/catalog/product/K/KI/KIDTORADO-MUSCUTORA65799297FD22C/1564571511644_0.jpg";
  name: string = "Tyre Mountain Cycle 21";
  desc: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et urna quis tortor sodales consectetur.";
  price?: number = 283;
}
