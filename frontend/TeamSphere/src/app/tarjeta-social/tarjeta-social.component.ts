import { Component } from '@angular/core';

@Component({
  selector: 'app-tarjeta-social',
  standalone: true,
  imports: [],
  templateUrl: './tarjeta-social.component.html',
  styleUrl: './tarjeta-social.component.css'
})
export class TarjetaSocialComponent {
  likesAmount: number = 7;
  liked: boolean = false;

  toggleLike() {
    this.liked = !this.liked;
    if (this.liked) {
      this.likesAmount++;
    } else {
      this.likesAmount--;
    }
  }
}
