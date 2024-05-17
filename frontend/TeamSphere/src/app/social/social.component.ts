import { Component } from '@angular/core';
import { SideBarComponent } from "../side-bar/side-bar.component";
import { NavbarComponent } from '../navbar/navbar.component';
import { TarjetaSocialComponent } from '../tarjeta-social/tarjeta-social.component';



@Component({
    selector: 'app-social',
    standalone: true,
    templateUrl: './social.component.html',
    styleUrl: './social.component.css',
    imports: [SideBarComponent, NavbarComponent, TarjetaSocialComponent]
})
export class SocialComponent {
    title = "Social";
}
