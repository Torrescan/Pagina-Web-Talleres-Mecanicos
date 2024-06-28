import { CommonModule } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { cliente } from '../../../shared/models/car.model';
import { ClientService } from '../../../shared/services/client.service';
import { RouterLinkWithHref } from '@angular/router';
import { TimeAgoPipe } from "../../../shared/pipes/time-ago.pipe";

@Component({
    selector: 'app-clientdetail',
    standalone: true,
    templateUrl: './clientdetail.component.html',
    styleUrl: './clientdetail.component.css',
    imports: [CommonModule, RouterLinkWithHref, TimeAgoPipe]
})
export class ClientdetailComponent {
  clientes : cliente[] = ([]);
  client: cliente | any = {};
  //marca =signal<modelos[]>([]);

  private clientService = inject(ClientService);
  
  @Input() id: number = 0;

  ngOnInit(){
   this.clientes = (this.clientService.clientnotsignal)
   // console.log(this.id)
    this.Oneclient()
  }
  Oneclient(){
//this.marca.update(this.marcas.slice(this.id))
  let result = this.clientes.find((marca) => marca.id == this.id);
  //console.log(result)
  this.client = (result)
  //console.log(this.marca)
  /* for (let marca of this.marcas) {
    if(marca.id == this.id){
      this.marca =  marca;break
    }

  }
  console.log(this.marca)*/
  }
}
