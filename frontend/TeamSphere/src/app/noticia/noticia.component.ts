import { NgForOf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HomeServices } from '../../Services/home.services';
import { Noticia, NoticiaExistente } from './noticia.model';
import Swal from 'sweetalert2';

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

    try {
      this.service.deleteNews(noticia);
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
        title: "Borrado en curso...."
      });
      setTimeout(() => {
        window.location.reload();
      }, 2000);
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
