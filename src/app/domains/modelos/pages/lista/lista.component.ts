import { CommonModule } from '@angular/common';
import { Component, Output, signal, EventEmitter } from '@angular/core';
import { MarcasComponent } from '../../components/marcas/marcas.component';
import { SHARED_COMPONENTS } from '../../../shared/shared.exports';
import { modelos } from '../../../shared/models/car.model';
//import { EventEmitter } from 'node:stream';

@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [CommonModule,MarcasComponent, SHARED_COMPONENTS],
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent {
  models =signal<modelos[]>([]);
  //@Output() addToMarcas = new EventEmitter ();
  constructor(){
    const InitModels : modelos[]=[
     {id: Date.now(),
      name:'Chevrolet',
      image: 'https://static.vecteezy.com/system/resources/previews/020/498/757/non_2x/chevrolet-brand-logo-car-symbol-with-name-white-design-usa-automobile-illustration-with-black-background-free-vector.jpg',

    },
    {
      id: Date.now(),
      name:'KIA',
      image: 'https://static.vecteezy.com/system/resources/previews/020/502/964/non_2x/kia-logo-brand-symbol-white-design-south-korean-car-automobile-illustration-with-black-background-free-vector.jpg',

    },
    {
      id: Date.now(),
      name:'NISSAN',
      image: 'https://static.vecteezy.com/system/resources/previews/020/336/133/original/nissan-logo-nissan-icon-free-free-vector.jpg',
    },
    {
      id: Date.now(),
      name:'FORD',
      image: 'https://st5.depositphotos.com/38540216/64112/v/450/depositphotos_641129812-stock-illustration-ford-brand-logo-car-symbol.jpg',
    },
    {
      id: Date.now(),
      name:'volkswagen',
      image: 'https://static.vecteezy.com/system/resources/previews/020/927/515/non_2x/volkswagen-brand-logo-car-symbol-white-design-german-automobile-illustration-with-black-background-free-vector.jpg',
    },
    {
      id: Date.now(),
      name:'Lexus',
      image: 'https://static.vecteezy.com/system/resources/previews/020/500/686/non_2x/lexus-brand-logo-car-symbol-with-name-white-design-japan-automobile-illustration-with-black-background-free-vector.jpg',
    },
    
    
    
    ];
    this.models.set(InitModels);
    //this.addToMarcas.emit(this.models);

  }
  
}
