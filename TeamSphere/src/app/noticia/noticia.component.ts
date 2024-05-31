import { NgForOf } from '@angular/common';
import { Component } from '@angular/core';
import { HomeServices } from '../../Services/home.services';
import { Noticia } from './noticia.model';

@Component({
  selector: 'app-noticia',
  standalone: true,
  imports: [NoticiaComponent, NoticiaComponent, NgForOf],
  templateUrl: './noticia.component.html',
  styleUrl: './noticia.component.css'
})
export class NoticiaComponent {
  constructor(private sercice:HomeServices){

  }

  noticias:Array<Noticia> = new Array<Noticia>;

  loadNews(): void {
      this.sercice.loadNews().subscribe(data =>{
          this.noticias = data
      })
    }

}
