import { Injectable, signal } from '@angular/core';
import { car, cliente, modelos } from '../models/car.model';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  cliente = signal<cliente[]>([]);
  //cars = signal<car[]>([]);
  //models = signal<modelos[]>([]);
  clientnotsignal : cliente [] = ([]);


  constructor() { 
    const clienteinfoinit: cliente[] = [
      {
        id: 1,
        name:'Juan López González',
        rfc:'LOGJ580812RH7',
        image: 'https://www.flowbite-react.com/images/people/profile-picture-1.jpg',
        historial:['si','no','si'],
        cars:1,
        moneyint: 0,
      },
      {
        id: 2,
        name:'Maria Angeles Dolores',
        rfc:'LDMA580812RM7',
        image: 'https://www.flowbite-react.com/images/people/profile-picture-2.jpg',
        historial:['si','no','si'],
        cars:1,
        moneyint: 0,
      },
      {
        id: 3,
        name:'uan López González',
        rfc:'LOGJ580812RH7',
        image: 'https://www.flowbite-react.com/images/people/profile-picture-3.jpg',
        historial:['si','no','si'],
        cars:1,
        moneyint: 0,
      },
      {
        id: 4,
        name:'uan López González',
        rfc:'LOGJ580812RH7',
        image: 'https://www.flowbite-react.com/images/people/profile-picture-4.jpg',
        historial:['si','no','si'],
        cars:1,
        moneyint: 0,
      },
      {
        id: 5,
        name:'uan López González',
        rfc:'LOGJ580812RH7',
        image: 'https://www.flowbite-react.com/images/people/profile-picture-5.jpg',
        historial:['si','no','si'],
        cars:1,
        moneyint: 0,
      },
    
    ];
    this.cliente.set(clienteinfoinit)
    this.clientnotsignal = (clienteinfoinit)
    }
  }



