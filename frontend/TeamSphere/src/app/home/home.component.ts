import { Component, OnInit } from '@angular/core';
import { SideBarComponent } from '../side-bar/side-bar.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { RouterLink } from '@angular/router';
import { HomeServices } from '../../Services/home.services';
import { CommonModule, NgForOf } from '@angular/common';
import { SortBarComponent } from '../sort-bar/sort-bar.component';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
import { Noticia } from '../social/post.model';
import { NoticiaComponent } from '../noticia/noticia.component';


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
  isNewVisible = false;
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

  noticias: Array<Noticia> = new Array<Noticia>();
  datos: Array<Noticia> = new Array<Noticia>();
  noticiaActual: Noticia = new Noticia();

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
  toggleNew(noticia:Noticia) {
    this.isNewVisible = !this.isNewVisible;
    this.noticiaActual = noticia;
    
  }
  cancel() {
    this.isFormVisible = false;
  }
  cancelNew() {
    this.isNewVisible = false;
  }
  createNews(){
    let noticia : Noticia = {
      title: this.titulo,
      description: this.description,
      type: this.type,
      image: this.image
    };

    try {
      this.service.postNews(noticia);
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


