import { Component, OnInit } from '@angular/core';
import { SideBarComponent } from "../side-bar/side-bar.component";
import { NavbarComponent } from '../navbar/navbar.component';
import { FormBuilder, FormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { UserService } from '../../Services/user.service';
import { Router } from '@angular/router'
import { Usuario } from '../login/usuario.model';
import { ReactiveFormsModule } from '@angular/forms';



@Component({
  selector: 'app-confi',
  standalone: true,
  templateUrl: './confi.component.html',
  styleUrl: './confi.component.css',
  imports: [SideBarComponent, NavbarComponent, FormsModule, CommonModule, RouterLink, ReactiveFormsModule]
})

export class ConfiComponent implements OnInit{
  title = "Configuracion";
  updateForm = this.fb.group({
    name : ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    username: ['', [Validators.required]],
    currentPassword: ['', [Validators.required, Validators.minLength(5)]],
    password: ['', [Validators.required, Validators.minLength(5)]],
    passwordRepeat: ['', [Validators.required, Validators.minLength(5)]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required, Validators.minLength(9), Validators.maxLength(12)]],
  })
  currentUser!:Usuario;

  constructor(private service: UserService, private router: Router, private fb:FormBuilder){

  }
  ngOnInit(): void {
    this.service.getCurrentUser().subscribe((currentUser)=>{
      this.currentUser = currentUser
      this.updateForm.patchValue(currentUser)
      console.log(currentUser);
    })
  }

  updateProfile(): void {
    if (this.updateForm.valid) {
      const name = this.updateForm.controls.name.value || ''
      const lastname = this.updateForm.controls.lastName.value || ''
      const username = this.updateForm.controls.username.value || ''
      const email = this.updateForm.controls.email.value || ''
      const password = this.updateForm.controls.password.value || ''
      const phone = this.updateForm.controls.phone.value || ''

      const updateData = new FormData()
      updateData.append('name', name)
      updateData.append('lastName', lastname)
      updateData.append('username', username)
      updateData.append('email', email)
      updateData.append('phone', phone)
      if (password) {
        updateData.append('password', password)
      }

      this.service.updateProfile(updateData).subscribe(
      )
    }
  }

  deleteProfile(){
    this.service.deleteProfile()
      .subscribe( () =>
        { this.router.navigate(['login']);
        }
      )
  }
}
