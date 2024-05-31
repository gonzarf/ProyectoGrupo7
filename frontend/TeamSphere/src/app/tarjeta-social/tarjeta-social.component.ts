import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AfterworkExistente } from '../afterwork/afterwork.model';
import { AfterworkServices } from '../../Services/afterwork.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tarjeta-social',
  standalone: true,
  imports: [],
  templateUrl: './tarjeta-social.component.html',
  styleUrl: './tarjeta-social.component.css'
})
export class TarjetaSocialComponent {
  likesAmount: number = 7;
  liked: boolean = false;


  constructor(private service: AfterworkServices){

  }

  toggleLike() {
    this.liked = !this.liked;
    if (this.liked) {
      this.likesAmount++;
    } else {
      this.likesAmount--;
    }
  }
  
  @Input() noticia: AfterworkExistente = new AfterworkExistente();
  
  @Output()
  btnEditarPulsado = new EventEmitter<boolean>();

  btnEditarSeleccionado(){ 
    
      this.btnEditarPulsado.emit(true);
  }



  deleteAfterwork(afterwork: AfterworkExistente){
    this.service.deleteAfterwork(afterwork);
    try {
      this.service.deleteAfterwork(afterwork);
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
