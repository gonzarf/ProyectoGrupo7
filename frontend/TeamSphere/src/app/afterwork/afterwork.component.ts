import { Component, OnInit } from '@angular/core';
import { SideBarComponent } from "../side-bar/side-bar.component";
import { NavbarComponent } from '../navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgIf } from '@angular/common';
import { TarjetaSocialComponent } from '../tarjeta-social/tarjeta-social.component';
import { Noticia } from '../noticia/noticia.model';
import { HomeServices } from '../../Services/home.services';
import { NoticiaComponent } from "../noticia/noticia.component";
import { log } from 'console';



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


  constructor(private service: HomeServices) {
  }



  title= "AfterWork";
  
  isFormVisible = false;
  
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
    this.loadNews();

  }

  noticias: Array<Noticia> = new Array<Noticia>();
  datos: Array<Noticia> = new Array<Noticia>();


  loadNews(): void {
    this.service.loadNews().subscribe((data) => {

      this.noticias = data;

    });

    this.noticias.forEach(element => {

      if(element.type == "afterwork"){
        this.datos.push(element)
      }
      
    });

    console.log(this.noticias)
  }

}