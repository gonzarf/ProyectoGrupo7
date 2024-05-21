import { Component } from '@angular/core';
import { SideBarComponent } from "../side-bar/side-bar.component";
import { NavbarComponent } from '../navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';



@Component({
    selector: 'app-confi',
    standalone: true,
    templateUrl: './confi.component.html',
    styleUrl: './confi.component.css',
    imports: [SideBarComponent, NavbarComponent, FormsModule, CommonModule,RouterLink]
})
export class ConfiComponent {
    title = "Configuracion";
    username:string = "";
    name:string = "";
    lastname:string = "";
    email:string = "";
    phone:string = "";
    currentPassword:string = "";
    newPassword:string = "";
    repeatPassword:string = "";
}
