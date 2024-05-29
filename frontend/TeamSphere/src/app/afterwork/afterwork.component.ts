import { Component, OnInit } from '@angular/core';
import { SideBarComponent } from "../side-bar/side-bar.component";
import { NavbarComponent } from '../navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TarjetaSocialComponent } from '../tarjeta-social/tarjeta-social.component';
import Swal from 'sweetalert2';
import { Afterwork } from './afterwork.model';
import { AfterworkServices } from '../../Services/afterwork.service';
import { NoticiaComponent } from '../noticia/noticia.component';



@Component({
    selector: 'app-afterwork',
    standalone: true,
    templateUrl: './afterwork.component.html',
    styleUrl: './afterwork.component.css',
    imports: [SideBarComponent,
        NavbarComponent,
        TarjetaSocialComponent, FormsModule, CommonModule, NoticiaComponent]
})
export class AfterworkComponent implements OnInit{


  constructor(private service: AfterworkServices) {
  }



  title= "AfterWork";
  
  isFormVisible = false;

  titulo = "";
  description = "";
  fecha = "";
  lugar = "";
  type = "afterwork";
  image = "";
  
  formData = {
    field1: '',
    field2: '',
    field3: '',
    field4: ''
  };

  toggleForm() {
    this.isFormVisible = !this.isFormVisible;
  }
  cancel() {
    this.isFormVisible = false;
  }

  ngOnInit(): void {
    this.loadAfterwork();

  }

  noticias: Array<Afterwork> = new Array<Afterwork>();
  datos: Array<Afterwork> = new Array<Afterwork>();


  loadAfterwork(): void {
    this.service.loadAfterwork().subscribe((data) => {

      this.noticias = data;

    });

    this.noticias.forEach(element => {

      if(element.type == "afterwork"){
        this.datos.push(element)
      }
      
    });

    console.log(this.noticias)
  }

  createAfterwork(){
    let afterwork : Afterwork = {
      title: this.titulo,
      description: this.description + "," + this.lugar + "," + this.fecha,
      type: this.type,
      image: this.image
    };

    try {
      console.log(afterwork);
      
      this.service.postAfterwork(afterwork);
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
        title: "¡Quedada publicada!"
      });
      setTimeout(() => {
        window.location.reload();
      }, 3000);
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