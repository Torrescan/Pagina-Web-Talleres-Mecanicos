import { Component, inject, signal } from '@angular/core';
import { SHARED_COMPONENTS } from '../../../shared/shared.exports';
import { CommonModule } from '@angular/common';
import { cliente } from '../../../shared/models/car.model';
import { ClientService } from '../../../shared/services/client.service';
import { DetallesComponent } from '../../components/detalles/detalles.component';
import { RouterLinkWithHref } from '@angular/router';
@Component({
  selector: 'app-client',
  standalone: true,
  imports: [CommonModule, SHARED_COMPONENTS,DetallesComponent,RouterLinkWithHref],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent {
  clientes = signal<cliente[]>([]);
  historial = signal<cliente[]>([]);
  private clienteService = inject(ClientService);
  client = this.clienteService.cliente;
constructor(){
const clienteinfoinit: cliente[] = [
  {
    id: 1,
    name:'Juan López González',
    rfc:'LOGJ580812RH7',
    image: 'https://www.flowbite-react.com/images/people/profile-picture-1.jpg',
    cars:1,
    moneyint: 0,
  },
  {
    id: 2,
    name:'Maria Angeles Dolores',
    rfc:'LDMA580812RM7',
    image: 'https://www.flowbite-react.com/images/people/profile-picture-2.jpg',
    cars:1,
    moneyint: 0,
  },
  {
    id: 3,
    name:'uan López González',
    rfc:'LOGJ580812RH7',
    image: 'https://www.flowbite-react.com/images/people/profile-picture-3.jpg',
    cars:1,
    moneyint: 0,
  },
  {
    id: 4,
    name:'uan López González',
    rfc:'LOGJ580812RH7',
    image: 'https://www.flowbite-react.com/images/people/profile-picture-4.jpg',
    cars:1,
    moneyint: 0,
  },
  {
    id: 5,
    name:'uan López González',
    rfc:'LOGJ580812RH7',
    image: 'https://www.flowbite-react.com/images/people/profile-picture-5.jpg',
    cars:1,
    moneyint: 0,
  },

]
this.clientes.set(clienteinfoinit)
}
hideSideMenu = signal(true);
toogleSidemenu(){
  this.hideSideMenu.update(prevState => !prevState);
}
}
