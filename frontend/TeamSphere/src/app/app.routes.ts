import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CompraVentaComponent } from './compra-venta/compra-venta.component';
import { SocialComponent } from './social/social.component';
import { AfterworkComponent } from './afterwork/afterwork.component';
import { DesplazamientosComponent } from './desplazamientos/desplazamientos.component';
import { ConfiComponent } from './confi/confi.component';

import { ContactoComponent } from './contacto/contacto.component';
import { ItemPageComponent } from './item-page/item-page.component';
import { TarjetaSocialComponent } from './tarjeta-social/tarjeta-social.component';

import { CambiarPasswordComponent } from './cambiar-password/cambiar-password.component';
import { ErrorpageComponent } from '../assets/errorpage/errorpage.component';
import { NoticiaComponent } from './noticia/noticia.component';
import { AparcamientoComponent } from './aparcamiento/aparcamiento.component';


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
        path:'tarjetasocial',
        component:TarjetaSocialComponent
    },{
        path:'noticia',
        component:NoticiaComponent}
    ,{
        path:'item',
        component:ItemPageComponent
    },{
        path:'cambiar-password',
        component:CambiarPasswordComponent
    },{
        path:'**',
        component:ErrorpageComponent
    }
];
