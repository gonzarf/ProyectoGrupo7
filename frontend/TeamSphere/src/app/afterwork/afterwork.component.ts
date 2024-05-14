import { Component } from '@angular/core';
import { SideBarComponent } from "../side-bar/side-bar.component";

@Component({
    selector: 'app-afterwork',
    standalone: true,
    templateUrl: './afterwork.component.html',
    styleUrl: './afterwork.component.css',
    imports: [SideBarComponent]
})
export class AfterworkComponent {

}
