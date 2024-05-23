import { NgForOf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { HomeServices } from '../../Services/home.services';
import { Noticia } from './noticia.model';

@Component({
  selector: 'app-noticia',
  standalone: true,
  imports: [NoticiaComponent, NoticiaComponent, NgForOf],
  templateUrl: './noticia.component.html',
  styleUrl: './noticia.component.css'
})
export class NoticiaComponent {

  @Input() noticia: any = "C:\Users\a926861\OneDrive - Eviden\Documentos\GitHub\ProyectoGrupo7\frontend\TeamSphere\src\assets\img\chart2.png";

}
