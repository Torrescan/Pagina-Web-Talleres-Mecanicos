import { CommonModule } from '@angular/common';
import { Component, Input, inject, signal } from '@angular/core';
import { modelos, talleres } from '../../../shared/models/car.model';
import { TalleresService } from '../../../shared/services/talleres.service';
import { MarcasService } from '../../../shared/services/marcas.service';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-detalle-marca',
  standalone: true,
  imports: [CommonModule,RouterLinkWithHref],
  templateUrl: './detalle-marca.component.html',
  styleUrl: './detalle-marca.component.css'
})
export class DetalleMarcaComponent {
  marcas : modelos[] = ([]);
  marca: modelos | any = {};
  //marca =signal<modelos[]>([]);

  private MarcasModels = inject(MarcasService);
  
  @Input() id: number = 0;

  ngOnInit(){
    this.marcas = (this.MarcasModels.modelsnotsignal)
   // console.log(this.id)
    this.OneMarca()
  }
  OneMarca(){
//this.marca.update(this.marcas.slice(this.id))
  let result = this.marcas.find((marca) => marca.id == this.id);
  //console.log(result)
  this.marca = (result)
  //console.log(this.marca)
  /* for (let marca of this.marcas) {
    if(marca.id == this.id){
      this.marca =  marca;break
    }

  }
  console.log(this.marca)*/
  }

}
