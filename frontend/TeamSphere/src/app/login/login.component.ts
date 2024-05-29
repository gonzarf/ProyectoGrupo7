import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { LoginServices } from '../../Services/login.services';
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormBuilder } from '@angular/forms';
import { Token } from './token.model';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterOutlet, RouterLink, FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent{
  constructor(private service:LoginServices, private router:Router, private fb:FormBuilder){
  }


  loginForm = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]],
  })

onSubmit(): void {
  if(this.loginForm.valid) {
    const username = this.loginForm.controls.username.value || ''
    const password = this.loginForm.controls.password.value || ''
    this.service
    .login({username, password})
    .subscribe(
      (data: Token) => {localStorage.setItem('access_token', data.token)
      console.log(localStorage.getItem('access_token'))
      this.router.navigate(['home']);
      }
    )
  }
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
