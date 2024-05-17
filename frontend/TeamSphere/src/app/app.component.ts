
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SortBarComponent } from './sort-bar/sort-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SortBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',

})
export class AppComponent {
  title = 'TeamSphere';
}
