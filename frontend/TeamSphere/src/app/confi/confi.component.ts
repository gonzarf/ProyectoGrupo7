import {Component, OnInit} from '@angular/core';
import {SideBarComponent} from "../side-bar/side-bar.component";
import {NavbarComponent} from '../navbar/navbar.component';
import {FormBuilder, FormsModule, Validators} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {UserService} from '../../Services/user.service';
import {Router} from '@angular/router'
import {Usuario} from '../login/usuario.model';
import {ReactiveFormsModule} from '@angular/forms';
import Swal from 'sweetalert2';
import {LoginServices} from "../../Services/login.services";


@Component({
  selector: 'app-confi',
  standalone: true,
  templateUrl: './confi.component.html',
  styleUrl: './confi.component.css',
  imports: [SideBarComponent, NavbarComponent, FormsModule, CommonModule, RouterLink, ReactiveFormsModule, RouterLinkActive]
})

export class ConfiComponent implements OnInit {
  title = "Configuracion";
  updateForm = this.fb.group({
    name: [''],
    lastName: [''],
    username: [''],
    currentPassword: ['', [Validators.minLength(5)]],
    newPassword: ['', [Validators.minLength(5)]],
    repeatPassword: ['', [Validators.minLength(5)]],
    email: ['', [Validators.email]],
    phone: ['', [Validators.minLength(9), Validators.maxLength(12)]],
  })

  currentUser!: Usuario;
  selectedFile!: File

  constructor(private service: UserService, private authService: LoginServices, private router: Router, private fb: FormBuilder) {

  }

  ngOnInit(): void {
    this.service.getCurrentUser().subscribe((currentUser) => {
      this.currentUser = currentUser
      this.updateForm.patchValue(currentUser)
    })
  }

  updateProfile(): void {
    if (this.updateForm.valid) {
      const name = this.updateForm.controls.name.value || ''
      const lastName = this.updateForm.controls.lastName.value || ''
      const username = this.updateForm.controls.username.value || ''
      const email = this.updateForm.controls.email.value || ''
      const newPassword = this.updateForm.controls.newPassword.value || ''
      const phone = this.updateForm.controls.phone.value || ''
      const image = this.selectedFile

      const updateData = new FormData()
      updateData.append('name', name)
      updateData.append('lastName', lastName)
      updateData.append('username', username)
      updateData.append('email', email)
      updateData.append('phone', phone)
      if (newPassword) {
        updateData.append('password', newPassword)
      }
      if (this.selectedFile) {
        updateData.append('file', this.selectedFile);
      }
      this.service.updateProfile(updateData).subscribe(
        () => {
          const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })

          Toast.fire({
            icon: 'success',
            title: 'Perfil actualizado correctamente'
          })

          if ((username && username !== this.currentUser.username) || (newPassword && newPassword !== this.currentUser.password)) {
            localStorage.removeItem('access_token')
            this.router.navigate(['']);
          }
        },
        (error) => {
          Swal.fire({
            title: 'Error',
            text: 'Hubo un problema al actualizar el perfil.',
            icon: 'error',
            confirmButtonText: 'OK'
          })
        }
      )
    }
  }

  deleteProfile() {
    this.service.deleteProfile()
      .subscribe(() => {
          this.router.navigate(['login']);
        }
      )
  }

  onFileChange(event: any): void {
    if (event.target.files.length > 0) {
      this.selectedFile = event.target.files[0];
    }
  }
}
