import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AfterworkExistente } from '../afterwork/afterwork.model';
import { AfterworkServices } from '../../Services/afterwork.service';

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
    window.location.reload();
  }
  
}
