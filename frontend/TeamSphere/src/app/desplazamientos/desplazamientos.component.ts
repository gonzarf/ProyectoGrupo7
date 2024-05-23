import { Component } from '@angular/core';
import { SideBarComponent } from "../side-bar/side-bar.component";
import { NavbarComponent } from "../navbar/navbar.component";
import { DesplazamientosItemComponent } from '../desplazamientos-item/desplazamientos-item.component';
import { CommonModule, NgStyle } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Desplazamiento } from './desplazamiento.model';
import { DisplacementServices } from '../../Services/displacement.service';

@Component({
    selector: 'app-desplazamientos',
    standalone: true,
    templateUrl: './desplazamientos.component.html',
    styleUrl: './desplazamientos.component.css',
    imports: [SideBarComponent, NavbarComponent, DesplazamientosItemComponent,NgStyle, CommonModule, FormsModule]
})
export class DesplazamientosComponent {
    constructor(private service: DisplacementServices) {}

    title = "Desplazamientos";

    ngOnInit(): void {
        this.loadDisplacement();
      }

    isFormVisible = false;

    titulo = "";
    description="";
    type = "desplazamiento";
    fechaSalida = "";

formData = {
        field1: '',
        field2: '',
        field3: '',
        field4: ''
      };

    desplazamientos: Array<Desplazamiento> = new Array<Desplazamiento>();

    

      loadDisplacement(): void {
        this.service.loadDisplacement().subscribe((data) => {
          this.desplazamientos = data;
        });
      }

    toggleForm() {
        this.isFormVisible = !this.isFormVisible;
      }
      cancel() {
        this.isFormVisible = false;
      }

      createDisplacement(){
        let desplazamiento : Desplazamiento = {
          title: this.titulo,
          description: this.fechaSalida + ", " + this.title + ", " + this.description,
          type: this.type
        }
    
        this.service.createDisplacement(desplazamiento);
        window.location.reload();
      }
}
