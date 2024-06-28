import { Component, Input, Output, EventEmitter  } from '@angular/core';
import { cliente } from '../../../shared/models/car.model';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-detalles',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detalles.component.html',
  styleUrl: './detalles.component.css'
})
export class DetallesComponent {
  
  @Input({required: true}) cliente!: cliente;
  
 // @Output() addToCart = new EventEmitter();
  //addToCartHandler(){
    
   // this.addToCart.emit(this.Product);
  //}
}
