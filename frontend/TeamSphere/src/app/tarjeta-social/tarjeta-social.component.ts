import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tarjeta-social',
  standalone: true,
  imports: [],
  templateUrl: './tarjeta-social.component.html',
  styleUrl: './tarjeta-social.component.css'
})
export class TarjetaSocialComponent {
  
  @Input() noticia: any
  
}
