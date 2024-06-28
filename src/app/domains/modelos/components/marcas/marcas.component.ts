import { CommonModule } from '@angular/common';
import { Component, Input, Output } from '@angular/core';
import { car, modelos } from '../../../shared/models/car.model';//usada para mostrar el tipo de carros
import { EventEmitter } from 'stream';

@Component({
  selector: 'app-marcas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './marcas.component.html',
  styleUrl: './marcas.component.css'
})
export class MarcasComponent {
@Input ({required: true}) Modelos!: modelos;
//@Output() addnewModelo =  new EventEmitter;

}
