import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CompraVentaComponent } from './compra-venta/compra-venta.component';
import { SocialComponent } from './social/social.component';
import { AfterworkComponent } from './afterwork/afterwork.component';
import { DesplazamientosComponent } from './desplazamientos/desplazamientos.component';
import { ConfiComponent } from './confi/confi.component';
import { AparcamientoComponent } from './aparcamiento/aparcamiento.component';
import { ContactoComponent } from './contacto/contacto.component';
import { CambiarPasswordComponent } from './cambiar-password/cambiar-password.component';

export const routes: Routes = [
    {
        path:'', 
        component:LoginComponent
    },{
        path:'home',
        component:HomeComponent
    },{
        path:'social',
        component:SocialComponent
    },{
        path:'afterwork',
        component:AfterworkComponent
    },{
        path:'compra-venta',
        component:CompraVentaComponent
    },{
        path:'desplazamientos',
        component:DesplazamientosComponent
    },{
        path:'aparcamiento',
        component:AparcamientoComponent
    },{
        path:'confi',
        component:ConfiComponent
    },{
        path:'contacto',
        component:ContactoComponent
    },{
        path:'cambiar-password',
        component:CambiarPasswordComponent
    }
    
];
