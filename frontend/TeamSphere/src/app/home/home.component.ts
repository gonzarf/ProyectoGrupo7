import { Component, OnInit } from '@angular/core';
import { SideBarComponent } from '../side-bar/side-bar.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { NoticiaComponent } from '../noticia/noticia.component';
import { RouterLink } from '@angular/router';
import { HomeServices } from '../../Services/home.services';
import { CommonModule, NgForOf } from '@angular/common';
import { SortBarComponent } from '../sort-bar/sort-bar.component';
import { FormsModule } from '@angular/forms';
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
    FormsModule,
    CommonModule
  ],
})
export class HomeComponent implements OnInit {

  postListFiltered : Noticia[] = [];

  constructor(private service: HomeServices) {}

  title = 'Home';
  isFormVisible = false;

  ngOnInit(): void {
    this.loadNews();
    
  }

  onSearchResult(data: Noticia[]) {
    this.postListFiltered = data;
    this.noticias = this.postListFiltered;
  }

  titulo = "";
  description="";
  type = "noticias";
  image = "";

  formData = {
    field1: '',
    field2: '',
    field3: '',
    field4: ''
  };

  noticias: Array<Noticia> = new Array<Noticia>();
  datos: Array<Noticia> = new Array<Noticia>();
  


  loadNews(): void {
    this.service.loadNews().subscribe((data) => {
      this.datos = data;
    });

    this.datos.forEach(dato => {
      
      if ((dato.type.toUpperCase() == "NOTICIA")||(dato.type.toUpperCase() == "NOTICIAS")) {
        this.noticias.push(dato);
      }
    });
  }
  toggleForm() {
    this.isFormVisible = !this.isFormVisible;
  }
  cancel() {
    this.isFormVisible = false;
  }
  createNews(){
    let noticia : Noticia = {
      title: this.titulo,
      description: this.description,
      type: this.type,
      image: this.image
    }
    
    this.service.postNews(noticia);
    window.location.reload();
  }
}
