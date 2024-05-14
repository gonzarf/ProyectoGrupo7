import { Component } from '@angular/core';
import { SideBarComponent } from "../side-bar/side-bar.component";

@Component({
    selector: 'app-desplazamientos',
    standalone: true,
    templateUrl: './desplazamientos.component.html',
    styleUrl: './desplazamientos.component.css',
    imports: [SideBarComponent]
})
export class DesplazamientosComponent {

}
