import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';

export const routes: Routes = [
    {
        path:'', 
        component:LoginComponent
    },{
        path:'home',
        component:HomeComponent
    },{
        path:'contacto',
        component:ContactoComponent
    }
];
