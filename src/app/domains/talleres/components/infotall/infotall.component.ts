import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { talleres } from '../../../shared/models/car.model';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-infotall',
  standalone: true,
  imports: [CommonModule,RouterLinkWithHref],
  templateUrl: './infotall.component.html',
  styleUrl: './infotall.component.css'
})
export class InfotallComponent {
@Input ({required: true}) talleres!: talleres;
}
