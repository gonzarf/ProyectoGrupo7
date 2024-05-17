import { Component, OnInit } from '@angular/core';
import { SideBarComponent } from '../side-bar/side-bar.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { NoticiaComponent } from '../noticia/noticia.component';
import { RouterLink } from '@angular/router';
import { HomeServices } from '../../Services/home.services';
import { NgForOf } from '@angular/common';
import { SortBarComponent } from '../sort-bar/sort-bar.component';
import { Noticia } from '../noticia/noticia.model';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  imports: [
    SideBarComponent,
    NoticiaComponent,
    RouterLink,
    NoticiaComponent,
    NgForOf,
    NavbarComponent,
    SortBarComponent,
  ],
})
export class HomeComponent implements OnInit {
  constructor(private service: HomeServices) {}

  title = 'Home';

  ngOnInit(): void {
    this.loadNews();
  }

  noticias: Array<Noticia> = new Array<Noticia>();

  loadNews(): void {
    this.service.loadNews().subscribe((data) => {
      this.noticias = data;
    });
  }
}
