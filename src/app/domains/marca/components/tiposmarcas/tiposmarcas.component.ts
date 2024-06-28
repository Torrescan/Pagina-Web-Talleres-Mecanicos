import { CommonModule } from '@angular/common';
import { Component, Input, signal } from '@angular/core';
import { modelos } from '../../../shared/models/car.model';
import { InfomarcaComponent } from '../../pages/infomarca/infomarca.component';
import { RouterLinkWithHref } from '@angular/router';


@Component({
  selector: 'app-tiposmarcas',
  standalone: true,
  imports: [CommonModule,InfomarcaComponent,RouterLinkWithHref],
  templateUrl: './tiposmarcas.component.html',
  styleUrl: './tiposmarcas.component.css'
})
export class TiposmarcasComponent {
  @Input ({required: true}) Marcas!: modelos;
}
