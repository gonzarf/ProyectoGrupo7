import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { EmailService } from '../../Services/email.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [RouterOutlet, RouterLink, FormsModule],
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {
  email = { from: '', to: 'recipient@example.com', subject: '', body: '' };
  message = '';

  constructor(private emailService: EmailService) {}

  sendEmailContacto() {
    this.emailService.sendEmail(this.email).subscribe(
      response => this.message = response,
      error => this.message = 'Failed to send email'
    );
  }
}
