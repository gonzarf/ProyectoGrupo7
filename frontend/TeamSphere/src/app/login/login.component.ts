import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { LoginServices } from '../../Services/login.services';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Usuario } from './usuario.model';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterOutlet, RouterLink, HttpClientModule, FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent{
  constructor(private service:LoginServices){
  }

  email:string = "";
  
  usuario:Promise<Usuario> | undefined;
  
  
  login(): void {
    this.usuario= this.service.login(this.email);
    console.log(typeof this.usuario);
    
    console.log(this.usuario);
    
    this.usuario!.then(
      (result) =>{
        if(result.email==""){
          alert("tu madre");
          console.log("no va");
          
        }else{
          alert("mi padre")
          console.log("va");
          
        }
      }
    );
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
