import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CompraVentaComponent } from './compra-venta/compra-venta.component';

export const routes: Routes = [
    {
        path:'', 
        component:LoginComponent
    },{
        path:'home',
        component:HomeComponent
    },{
        path:'social',
        component:HomeComponent
    },{
        path:'afterwork',
        component:HomeComponent
    },{
        path:'compra-venta',
        component:CompraVentaComponent
    },{
        path:'desplazamientos',
        component:HomeComponent
    },{
        path:'aparcamiento',
        component:HomeComponent
    },{
        path:'confi',
        component:HomeComponent
    },{
        path:'contacto',
        component:HomeComponent
    }
    
];
