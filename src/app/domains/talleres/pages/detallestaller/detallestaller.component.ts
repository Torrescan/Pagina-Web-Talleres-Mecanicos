import { Component, Input, inject } from '@angular/core';
import { talleres } from '../../../shared/models/car.model';
import { TalleresService } from '../../../shared/services/talleres.service';

@Component({
  selector: 'app-detallestaller',
  standalone: true,
  imports: [],
  templateUrl: './detallestaller.component.html',
  styleUrl: './detallestaller.component.css'
})
export class DetallestallerComponent {
  talleres : talleres[] = ([]);
  taller: talleres | any = {};
  //marca =signal<modelos[]>([]);

  private TalleresDisponi = inject(TalleresService);
  
  @Input() id: number = 0;

  ngOnInit(){
    this.talleres = (this.TalleresDisponi.tallerssnotsignal)
   // console.log(this.id)
    this.OneTaller()
  }
  OneTaller(){
//this.marca.update(this.marcas.slice(this.id))
  let result = this.talleres.find((taller) => taller.id == this.id);
  //console.log(result)
  this.taller = (result)
  console.log(result)
  //console.log(this.marca)
  /* for (let marca of this.marcas) {
    if(marca.id == this.id){
      this.marca =  marca;break
    }

  }
  console.log(this.marca)*/
  }

}
