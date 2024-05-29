import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HomeServices } from '../../Services/home.services';
import { Noticia } from '../noticia/noticia.model';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  @Input() title: string = "";
  @Input() page: string = "";
  @Output() searchResult = new EventEmitter<Noticia[]>();  // Emite el resultado de la búsqueda
  searchText!: string;
  postList: Noticia[] = new Array<Noticia>();

  constructor(private service:HomeServices) {}

  searchByTitle(): void {
    this.service.searchPosts(this.searchText).subscribe((data) => {
      this.postList = data;
      this.searchResult.emit(this.postList);  // Emite los datos obtenidos
    });

    
  }

}
