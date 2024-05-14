import { Component } from '@angular/core';
import { SideBarComponent } from "../side-bar/side-bar.component";
import { NoticiaComponent } from "../noticia/noticia.component";
import { RouterLink } from '@angular/router';
import { HomeServices } from '../../Services/home.services';
import { Noticia } from '../noticia/noticia.model';
import { NgForOf } from '@angular/common';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [SideBarComponent, NoticiaComponent, RouterLink, NoticiaComponent, NgForOf]
})
export class HomeComponent {

    

}
