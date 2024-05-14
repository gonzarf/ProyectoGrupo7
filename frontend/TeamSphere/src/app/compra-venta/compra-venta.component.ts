import { Component } from '@angular/core';
import { SideBarComponent } from "../side-bar/side-bar.component";
import { ItemComponent } from "../item/item.component";
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
    selector: 'app-compra-venta',
    standalone: true,
    templateUrl: './compra-venta.component.html',
    styleUrl: './compra-venta.component.css',
    imports: [SideBarComponent, ItemComponent, NavbarComponent]
})
export class CompraVentaComponent {
    title = "Compra / Venta";
}
