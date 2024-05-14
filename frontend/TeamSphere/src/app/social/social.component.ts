import { Component } from '@angular/core';
import { SideBarComponent } from "../side-bar/side-bar.component";

@Component({
    selector: 'app-social',
    standalone: true,
    templateUrl: './social.component.html',
    styleUrl: './social.component.css',
    imports: [SideBarComponent]
})
export class SocialComponent {

}
