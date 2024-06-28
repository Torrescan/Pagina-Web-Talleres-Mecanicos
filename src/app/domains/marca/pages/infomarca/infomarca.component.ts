import { CommonModule } from '@angular/common';
import { Component, Input, inject, signal } from '@angular/core';
import { ListaComponent } from '../../../modelos/pages/lista/lista.component';

import { modelos } from '../../../shared/models/car.model';
import { set } from 'date-fns';
import { TiposmarcasComponent } from '../../components/tiposmarcas/tiposmarcas.component';
import { MarcasService } from '../../../shared/services/marcas.service';
@Component({
  selector: 'app-infomarca',
  standalone: true,
  imports: [CommonModule,ListaComponent,TiposmarcasComponent],
  templateUrl: './infomarca.component.html',
  styleUrl: './infomarca.component.css'
})
export class InfomarcaComponent {
   marcas =signal<modelos[]>([]);
  @Input() id?:string;
 private MarcasModels= inject(MarcasService);
  //marca = signal(this.MarcasModels.models);
  
  //marca  = this.MarcasModels.models;
 ngOnInit(){
  // this.marcas.set(this.MarcasModels.obtainMarc())
this.marcas.update(this.MarcasModels.models)
  //this.marcas.set(this.MarcasModels.models)
  if(this.id){
   console.log(this.id)
   
  }
  
 }


  constructor (){
   /* const InitModels : modelos[]=[
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
    //this.marcas.set(InitModels);
   
    */
  }

  
}


