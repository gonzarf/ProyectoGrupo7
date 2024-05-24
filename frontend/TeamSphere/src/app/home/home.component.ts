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
import Swal from 'sweetalert2';


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
  constructor(private service: HomeServices) {}

  title = 'Home';
  isFormVisible = false;
  ngOnInit(): void {
    this.loadNews();
  }

  titulo = "";
  description = "";
  type = "noticias";
  image = "";

  formData = {
    field1: '',
    field2: '',
    field3: '',
    field4: ''
  };

  noticias: Array<Noticia> = [];
  datos: Array<Noticia> = [];

  loadNews(): void {
    this.service.loadNews().subscribe((data) => {
      this.datos = data;
      this.filterNews();
    });
  }

  filterNews(): void {
    this.noticias = this.datos.filter(dato => dato.type.toUpperCase() === "NOTICIA" || dato.type.toUpperCase() === "NOTICIAS");
  }

  toggleForm() {
    this.isFormVisible = !this.isFormVisible;
  }

  cancel() {
    this.isFormVisible = false;
  }

  async createNews() {
    let noticia: Noticia = {
      title: this.titulo,
      description: this.description,
      type: this.type,
      image: this.image
    };

    try {
      await this.service.postNews(noticia);
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer);
          toast.addEventListener('mouseleave', Swal.resumeTimer);
        }
      });
      Toast.fire({
        icon: "success",
        title: "¡Noticia publicada!"
      });
      setTimeout(() => {
        window.location.reload();
      }, 3000);
    } catch (error) {
      Swal.fire({
        title: 'Error',
        text: 'Hubo un problema al publicar la noticia.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    }
  }
}


