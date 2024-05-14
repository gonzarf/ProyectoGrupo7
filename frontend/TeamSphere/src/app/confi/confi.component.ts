import { Component } from '@angular/core';
import { SideBarComponent } from "../side-bar/side-bar.component";

@Component({
    selector: 'app-confi',
    standalone: true,
    templateUrl: './confi.component.html',
    styleUrl: './confi.component.css',
    imports: [SideBarComponent]
})
export class ConfiComponent {

}
