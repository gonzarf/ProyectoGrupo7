import { Component } from '@angular/core';
import { SideBarComponent } from '../side-bar/side-bar.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { TarjetaSocialComponent } from '../tarjeta-social/tarjeta-social.component';
import { ItemSocialComponent } from '../item-social/item-social.component';
import { SocialServices } from '../../Services/social.service';
import { User } from './social.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HomeServices } from '../../Services/home.services';
import { Noticia } from './post.model';

@Component({
  selector: 'app-social',
  standalone: true,
  templateUrl: './social.component.html',
  styleUrl: './social.component.css',
  imports: [
    SideBarComponent,
    NavbarComponent,
    TarjetaSocialComponent,
    ItemSocialComponent,
    FormsModule,
    CommonModule
  ],
})
export class SocialComponent {
  title = 'Social';
  constructor(private service: SocialServices, private servicePost: HomeServices) {}


  users: Array<User> = new Array<User>();
  posts: Array<Noticia> = new Array<Noticia>();

  ngOnInit(): void {
    this.loadUser();
    this.loadPosts();
  }

  loadUser(): void {
    this.service.loadUser().subscribe((data) => {
      this.users = data;
    });
    console.log(this.users);
    console.log(this.posts);

  }
  loadPosts(): void {
    this.servicePost.loadNews().subscribe((data) => {
      this.posts = data;
    });
    console.log(this.users);
    console.log(this.posts);

  }
}
