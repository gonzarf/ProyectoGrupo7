import { CommonModule, NgForOf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { HomeServices } from '../../Services/home.services';
import { Noticia } from './noticia.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-noticia',
  standalone: true,
  imports: [NoticiaComponent, NoticiaComponent, NgForOf, FormsModule, CommonModule],
  templateUrl: './noticia.component.html',
  styleUrl: './noticia.component.css'
})
export class NoticiaComponent {
  constructor(private service: HomeServices) {}
  
  isFormVisible = false;
  isNewVisible = false;
  @Input() noticia: any = "C:\Users\a926861\OneDrive - Eviden\Documentos\GitHub\ProyectoGrupo7\frontend\TeamSphere\src\assets\img\chart2.png";

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

  toggleForm() {
    this.isFormVisible = !this.isFormVisible;
    
    this.titulo = "sd";
    this.description = "sss";
  }

  cancel() {
    this.isFormVisible = false;
  }

  updateNews() {
    
  }
}
