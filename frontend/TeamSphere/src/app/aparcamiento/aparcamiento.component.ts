import { Component } from '@angular/core';
import { SideBarComponent } from "../side-bar/side-bar.component";
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
    selector: 'app-aparcamiento',
    standalone: true,
    templateUrl: './aparcamiento.component.html',
    styleUrl: './aparcamiento.component.css',
    imports: [SideBarComponent, NavbarComponent]
})
export class AparcamientoComponent {
    title = "Aparcamiento";

}
