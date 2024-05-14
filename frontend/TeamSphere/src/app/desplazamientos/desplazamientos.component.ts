import { Component } from '@angular/core';
import { SideBarComponent } from "../side-bar/side-bar.component";
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
    selector: 'app-desplazamientos',
    standalone: true,
    templateUrl: './desplazamientos.component.html',
    styleUrl: './desplazamientos.component.css',
    imports: [SideBarComponent, NavbarComponent]
})
export class DesplazamientosComponent {
    title = "Desplazamiento";

}
