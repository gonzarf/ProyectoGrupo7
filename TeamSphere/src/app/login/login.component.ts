
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { LoginServices } from '../../Services/login.services';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Usuario } from './usuario.model';
import { routes } from '../app.routes';
import { LoginDTO } from './loginDTO.model';
import { error } from 'console';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterOutlet, RouterLink, FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent{
  constructor(private service:LoginServices, private router:Router){
  }

  email:string = "";
  password:string = "";
  
  usuario:Usuario = new Usuario;
  
  
  login(): void {
    this.router.navigate(['/home']);
    
    let logindto: LoginDTO = {email: this.email, password: this.password}

    this.service.login(logindto).subscribe(dato =>{

      if (dato.email == this.email){
        this.router.navigate(['/home'])
      }else{
        console.log("hola")
      }

    }, error => console.log(error))

    
    //console.log(typeof this.usuario);
    //
    //console.log(this.usuario);
    
    //this.usuario!.then(
    //  (result) =>{
    //    if(result.email==""){
    //      alert("tu madre");
    //      console.log("no va");
    //      
    //    }else{
    //      
    //      alert("mi padre")
    //      console.log(this.usuario);
    //      
    //    }
    //  }
    //);
  }



  showSignUp(): void {
    const container = document.querySelector('.container') as HTMLDivElement;
    container.classList.add('sign-up-mode');
  }
 
  showSignIn(): void {
    const container = document.querySelector('.container') as HTMLDivElement;
    container.classList.remove('sign-up-mode');
  }

}
