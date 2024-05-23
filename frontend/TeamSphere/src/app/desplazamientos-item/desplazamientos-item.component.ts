import { NgClass, NgStyle } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Desplazamiento } from '../desplazamientos/desplazamiento.model';

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

  
  @Input() desplazamiento: any = "C:\Users\a926861\OneDrive - Eviden\Documentos\GitHub\ProyectoGrupo7\frontend\TeamSphere\src\assets\img\chart2.png";
  
  Apuntarse(){
    console.log(this.desplazamiento);
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
