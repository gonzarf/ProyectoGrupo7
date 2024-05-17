import { Component } from '@angular/core';
import { SideBarComponent } from "../side-bar/side-bar.component";
import { ItemComponent } from "../item/item.component";
import { NavbarComponent } from "../navbar/navbar.component";
import { SortBarComponent } from "../sort-bar/sort-bar.component";

@Component({
    selector: 'app-compra-venta',
    standalone: true,
    templateUrl: './compra-venta.component.html',
    styleUrl: './compra-venta.component.css',
    imports: [SideBarComponent, ItemComponent, NavbarComponent, SortBarComponent]
})
export class CompraVentaComponent {
    title = "Compra / Venta";
}
