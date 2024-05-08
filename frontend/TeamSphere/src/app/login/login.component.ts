import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  showSignUp(): void {
    const container = document.querySelector('.container') as HTMLDivElement;
    container.classList.add('sign-up-mode');
  }
 
  showSignIn(): void {
    const container = document.querySelector('.container') as HTMLDivElement;
    container.classList.remove('sign-up-mode');
  }

}
