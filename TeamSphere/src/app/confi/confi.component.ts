import { Component } from '@angular/core';
import { SideBarComponent } from "../side-bar/side-bar.component";
import { NavbarComponent } from '../navbar/navbar.component';



@Component({
    selector: 'app-confi',
    standalone: true,
    templateUrl: './confi.component.html',
    styleUrl: './confi.component.css',
    imports: [SideBarComponent, NavbarComponent]
})
export class ConfiComponent {
    title = "Configuracion"
}
