
import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { SortBarComponent } from './sort-bar/sort-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SortBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',

})
export class AppComponent implements OnInit {
  title = 'TeamSphere';

  constructor(private router: Router) {}

  
  ngOnInit(): void {

    if(localStorage.getItem('access_token') == null){

      this.router.navigate([''])
    }

  }
}
