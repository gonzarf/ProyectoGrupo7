import { Component } from '@angular/core';
import { SideBarComponent } from "../side-bar/side-bar.component";
import { NavbarComponent } from '../navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TarjetaSocialComponent } from '../tarjeta-social/tarjeta-social.component';



@Component({
    selector: 'app-afterwork',
    standalone: true,
    templateUrl: './afterwork.component.html',
    styleUrl: './afterwork.component.css',
    imports: [SideBarComponent, NavbarComponent, TarjetaSocialComponent, FormsModule, CommonModule]
})
export class AfterworkComponent {
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
}