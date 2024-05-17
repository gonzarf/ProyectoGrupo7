import { Component } from '@angular/core';
import { SideBarComponent } from "../side-bar/side-bar.component";
import { NavbarComponent } from '../navbar/navbar.component';
import { TarjetaSocialComponent } from '../tarjeta-social/tarjeta-social.component';



@Component({
    selector: 'app-afterwork',
    standalone: true,
    templateUrl: './afterwork.component.html',
    styleUrl: './afterwork.component.css',
    imports: [SideBarComponent, NavbarComponent, TarjetaSocialComponent]
})
export class AfterworkComponent {
    title= "AfterWork";
}
