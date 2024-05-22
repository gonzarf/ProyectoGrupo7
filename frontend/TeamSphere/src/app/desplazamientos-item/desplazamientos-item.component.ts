import { Component } from '@angular/core';

@Component({
  selector: 'app-desplazamientos-item',
  standalone: true,
  imports: [],
  templateUrl: './desplazamientos-item.component.html',
  styleUrl: './desplazamientos-item.component.css'
})
export class DesplazamientosItemComponent {

  espacios = 0;
  // btnApuntarse = document.getElementsByClassName("likes_text");


  Apuntarse(){
    
    if(this.espacios < 4){

      this.espacios++;
      
    }
   
    
  }
}
