import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent {
  
  id: string =""; 
  name: string = "";
  desc: string = "";
  price?: number;
  image: string = "";
  date?: Date;
}
