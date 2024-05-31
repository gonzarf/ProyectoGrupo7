import { NgClass, NgStyle } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Desplazamiento, DesplazamientoExistente } from '../desplazamientos/desplazamiento.model';
import { DisplacementServices } from '../../Services/displacement.service';
import { Binary } from '@angular/compiler';
import { log } from 'console';
import { randomUUID } from 'crypto';
import Swal from 'sweetalert2';

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

    try {
      this.service.deleteDisplacement(desplazamiento);
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
