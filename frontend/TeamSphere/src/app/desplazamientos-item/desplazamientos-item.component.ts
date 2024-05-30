import { NgClass, NgStyle } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Desplazamiento, DesplazamientoExistente } from '../desplazamientos/desplazamiento.model';
import { DisplacementServices } from '../../Services/displacement.service';
import { Binary } from '@angular/compiler';
import { log } from 'console';
import { randomUUID } from 'crypto';

@Component({
  selector: 'app-desplazamientos-item',
  standalone: true,
  imports: [NgStyle,NgClass],
  templateUrl: './desplazamientos-item.component.html',
  styleUrl: './desplazamientos-item.component.css'
})
export class DesplazamientosItemComponent {

  

  constructor(private service: DisplacementServices) {}
  espacios = 0;
  btnApuntarse = "fill";
  btnDesapuntarse = "fill";
  
  
  @Input() desplazamiento: DesplazamientoExistente = new DesplazamientoExistente();
  @Input() fecha_salida:string = "";
  @Output()
  btnEditarPulsado = new EventEmitter<boolean>();
  
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


  Editar(){
    this.btnEditarPulsado.emit(true);
  }


  deleteDisplacement(desplazamiento: DesplazamientoExistente) {
    this.service.deleteDisplacement(desplazamiento);
    
    
    window.location.reload();
  }

  

  
}
