import { NgForOf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HomeServices } from '../../Services/home.services';
import { Noticia, NoticiaExistente } from './noticia.model';

@Component({
  selector: 'app-noticia',
  standalone: true,
  imports: [NoticiaComponent, NoticiaComponent, NgForOf],
  templateUrl: './noticia.component.html',
  styleUrl: './noticia.component.css'
})
export class NoticiaComponent {

  @Input() noticia: any = "C:\Users\a926861\OneDrive - Eviden\Documentos\GitHub\ProyectoGrupo7\frontend\TeamSphere\src\assets\img\chart2.png";

  @Output()
  btnEditarPulsado = new EventEmitter<boolean>();


  constructor(private service: HomeServices){}


  btnEditarSeleccionado(editar: boolean){ 
    if (editar) {
      this.btnEditarPulsado.emit(true);
      
    } else {
      
      this.btnEditarPulsado.emit(false);
    }
  }

  deleteNews(noticia: NoticiaExistente){
    this.service.deleteNews(noticia);
    window.location.reload();
  }
  


}
