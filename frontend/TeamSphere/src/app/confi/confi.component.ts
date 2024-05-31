import { Component } from '@angular/core';
import { SideBarComponent } from "../side-bar/side-bar.component";
import { NavbarComponent } from '../navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { UserService } from '../../Services/user.service';
import { User } from '../social/social.model';
import { Router } from '@angular/router'



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
    currentUser!:User;

    constructor(private service: UserService, private router: Router){
    }

    deleteProfile(){
        this.service.deleteProfile()
        .subscribe( () => 
            { this.router.navigate(['login']);
        }
    )
    }
}