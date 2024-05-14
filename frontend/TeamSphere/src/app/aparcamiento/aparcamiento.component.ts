import { Component } from '@angular/core';
import { SideBarComponent } from "../side-bar/side-bar.component";

@Component({
    selector: 'app-aparcamiento',
    standalone: true,
    templateUrl: './aparcamiento.component.html',
    styleUrl: './aparcamiento.component.css',
    imports: [SideBarComponent]
})
export class AparcamientoComponent {

}
