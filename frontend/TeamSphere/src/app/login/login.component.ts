import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { LoginServices } from '../../Services/login.services';
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormBuilder } from '@angular/forms';
import { Token } from './token.model';
import { validateHeaderName } from 'http';

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

  registerForm = this.fb.group({
    name : ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    username: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.minLength(5)]],
    passwordRepeat: ['', [Validators.required, Validators.minLength(5)]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required, Validators.minLength(9), Validators.maxLength(12)]],
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

onSubmitRegister(){
  console.log("entra")

  if(this.registerForm.controls.password.value != this.registerForm.controls.passwordRepeat.value){
    alert('Las contraseñas no coinciden')
  }else if (this.registerForm.controls.password.value == this.registerForm.controls.passwordRepeat.value){
    console.log("entra tambien")
    if(this.registerForm.valid) {
      const name = this.registerForm.controls.name.value || ''
      const lastName = this.registerForm.controls.lastName.value || ''
      const email = this.registerForm.controls.email.value || ''
      const phone = this.registerForm.controls.phone.value || ''
      const username = this.registerForm.controls.username.value || ''
      const password = this.registerForm.controls.password.value || ''
      const formData = new FormData()
      formData.append('name', name)
      formData.append('lastName', lastName)
      formData.append('email', email)
      formData.append('phone', phone)
      formData.append('username', username)
      formData.append('password', password)

      console.log(formData.get('name'))
      console.log(formData.get('username'))
      console.log(formData.get('lastName'))
      console.log(formData.get('email'))
      console.log(formData.get('password'))
      console.log(formData.get('phone'))

      this.service.register(formData).subscribe(
        (data: Token) => {localStorage.setItem('access_token', data.token)
        console.log(localStorage.getItem('access_token'))
        this.router.navigate(['home']);
        }
      )
    } else {
      console.log("no es valido")
    }
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
