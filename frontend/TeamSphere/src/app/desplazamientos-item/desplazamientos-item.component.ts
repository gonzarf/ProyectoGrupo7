import { NgClass, NgStyle } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-desplazamientos-item',
  standalone: true,
  imports: [NgStyle,NgClass],
  templateUrl: './desplazamientos-item.component.html',
  styleUrl: './desplazamientos-item.component.css'
})
export class DesplazamientosItemComponent {

  espacios = 0;
  btnApuntarse = "fill";
  btnDesapuntarse = "fill";
  

  Apuntarse(){
    
    if(this.espacios < 4){

      this.espacios++;
      this.btnApuntarse = "none";
      this.btnDesapuntarse = "fill"
      
    }
   
    
  }
  Desapuntarse(){
    
    this.espacios--;


    if(this.espacios < 4){

      
      this.btnDesapuntarse = "none";
      this.btnApuntarse = "fill";
       
    }
   
    
  }
}
