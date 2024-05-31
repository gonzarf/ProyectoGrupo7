import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item-social',
  standalone: true,
  imports: [],
  templateUrl: './item-social.component.html',
  styleUrl: './item-social.component.css'
})
export class ItemSocialComponent {
  @Input() user: any = "C:\Users\a926861\OneDrive - Eviden\Documentos\GitHub\ProyectoGrupo7\frontend\TeamSphere\src\assets\img\chart2.png";
  numSeguidores = 0;
  numSeguidos = 0;


  
}
