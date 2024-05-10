import { Component } from '@angular/core';
import { SideBarComponent } from "../side-bar/side-bar.component";
import { NoticiaComponent } from "../noticia/noticia.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [SideBarComponent, NoticiaComponent]
})
export class HomeComponent {

}
