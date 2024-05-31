import { Component, OnInit } from '@angular/core';
import { SideBarComponent } from "../side-bar/side-bar.component";
import { NavbarComponent } from '../navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TarjetaSocialComponent } from '../tarjeta-social/tarjeta-social.component';
import Swal from 'sweetalert2';
import { Afterwork, AfterworkExistente } from './afterwork.model';
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
  isEditVisible = false;
  isNewVisible = false;

  titulo = "";
  description = "";
  fecha = "";
  lugar = "";
  type = "afterwork";
  image = "";
  tituloEditar = "";
  descriptionEditar = "";
  fechaEditar = "";
  lugarEditar = "";
  typeEditar = "afterwork";
  imageEditar = "";
  
  formData = {
    field1: '',
    field2: '',
    field3: '',
    field4: ''
  };

  afterwork: Array<AfterworkExistente> = new Array<AfterworkExistente>();
  datos: Array<AfterworkExistente> = new Array<AfterworkExistente>();
  afterworkActual: Afterwork = new Afterwork();
  afterworkEditar: AfterworkExistente = new AfterworkExistente();

  toggleForm() {
    this.isFormVisible = !this.isFormVisible;
  }
  cancel() {
    this.isFormVisible = false;
  }

  ngOnInit(): void {
    this.loadAfterwork();
  }



  loadAfterwork(): void {
    this.service.loadAfterwork().subscribe((data) => {

      this.afterwork = data;

    });

    this.afterwork.forEach(element => {

      if(element.type == "afterwork"){
        this.datos.push(element)
      }
      
    });
  }

  createAfterwork(){
    let afterwork : Afterwork = {
      title: this.titulo,
      description: this.description + "," + this.lugar + "," + this.fecha,
      type: this.type,
      image: this.image
    };

    try {
      
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
        text: 'Hubo un problema al publicar la quedada.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    }
  }

  
  toggleNew(afterwork:Afterwork) {
    this.isNewVisible = !this.isNewVisible;
    this.afterworkActual = afterwork;
    
  }
  
  cancelEdit() {
    this.isEditVisible = false;
  }

  Editar(visible:boolean, afterwork:AfterworkExistente){
    
    if (visible) {
      this.isFormVisible = false;
      console.log(this.isFormVisible);
      this.isEditVisible = true;
      this.afterworkEditar = afterwork;
      this.tituloEditar = afterwork.title
      this.imageEditar = afterwork.image
      this.lugarEditar = afterwork.description.split(",")[1];
      this.fechaEditar = afterwork.description.split(",")[2];
      this.descriptionEditar = afterwork.description.split(",")[0];
    }
    else{
      this.toggleNew(afterwork);
    }
  }

  editAfterworks(_afterworkEditar: AfterworkExistente){

    let afterwork : AfterworkExistente = {
      id: _afterworkEditar.id,
      title: this.tituloEditar,
      description: this.descriptionEditar + "," + this.lugarEditar + "," + this.fechaEditar,
      type: this.typeEditar,
      image: this.imageEditar,
    };
    

    try {
      this.service.putAfterwork(afterwork);
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
        title: "Quedada modificada!"
      });
      setTimeout(() => {
        window.location.reload();
      }, 3000);
    } catch (error) {
      Swal.fire({
        title: 'Error',
        text: 'Hubo un problema al modificar la quedada.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    }
  }

}