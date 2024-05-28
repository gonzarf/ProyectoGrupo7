import { Component } from '@angular/core';
import { SideBarComponent } from '../side-bar/side-bar.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { DesplazamientosItemComponent } from '../desplazamientos-item/desplazamientos-item.component';
import { CommonModule, NgStyle } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Desplazamiento } from './desplazamiento.model';
import { DisplacementServices } from '../../Services/displacement.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-desplazamientos',
  standalone: true,
  templateUrl: './desplazamientos.component.html',
  styleUrl: './desplazamientos.component.css',
  imports: [
    SideBarComponent,
    NavbarComponent,
    DesplazamientosItemComponent,
    NgStyle,
    CommonModule,
    FormsModule,
  ],
})
export class DesplazamientosComponent {
  constructor(private service: DisplacementServices) {}

  title = 'Desplazamientos';

  ngOnInit(): void {
    this.loadDisplacement();
  }

  isFormVisible = false;

  titulo = '';
  description = '';
  type = 'desplazamiento';
  fechaSalida = '';

  formData = {
    field1: '',
    field2: '',
    field3: '',
    field4: '',
  };

  desplazamientos: Array<Desplazamiento> = new Array<Desplazamiento>();
  datos: Array<Desplazamiento> = new Array<Desplazamiento>();

  loadDisplacement(): void {
    this.service.loadDisplacement().subscribe((data) => {
      this.datos = data;
    });

    this.datos.forEach((dato) => {
      if (
        dato.type.toUpperCase() == 'DESPLAZAMIENTOS' ||
        dato.type.toUpperCase() == 'DESPLAZAMIENTO'
      ) {
        this.desplazamientos.push(dato);
      }
    });
  }

  toggleForm() {
    this.isFormVisible = !this.isFormVisible;
  }
  cancel() {
    this.isFormVisible = false;
  }

  createDisplacement() {
    let desplazamiento: Desplazamiento = {
      title: this.titulo,
      description:
        this.fechaSalida + ', ' + this.title + ', ' + this.description,
      type: this.type,
    };

    try {
      this.service.createDisplacement(desplazamiento);
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer);
          toast.addEventListener('mouseleave', Swal.resumeTimer);
        },
      });
      Toast.fire({
        icon: 'success',
        title: '¡Quedada publicada!',
      });
      setTimeout(() => {
        window.location.reload();
      }, 3000);
    } catch (error) {
      Swal.fire({
        title: 'Error',
        text: 'Hubo un problema al publicar la noticia.',
        icon: 'error',
        confirmButtonText: 'OK',
      });
    }
  }
}
