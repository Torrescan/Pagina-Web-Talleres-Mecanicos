import { Injectable, signal } from '@angular/core';
import { modelos, talleres } from '../models/car.model';

@Injectable({
  providedIn: 'root'
})
export class TalleresService {
  tallers = signal<talleres[]>([]);
  tallerssnotsignal : talleres [] = ([]);



  constructor() {
    const initTallers = [
     {
      id: 1,
      name:'Precision Center, S.A. De C.V.',
      image: 'https://lh5.googleusercontent.com/p/AF1QipNJU8ZATK1vBn9aEKcjL_8vcsblhcNlMEtY04_O=w260-h175-n-k-no',
      descripcion:'¿SE ENFERMÓ TU AUTO ? Un diagnóstico acertado resuelve esos problemas, Haz tu cita a los 8-18-16-55 y 8-18-16-75, Estamos en el Blvd, Rosales esq con Av.',
      url:'https://www.google.com/maps/dir//Antonio+Rosales+205+sur,+esq.+Av.+Benito+Ju%C3%A1rez,+81200+Los+Mochis,+Sin./@25.7933577,-109.0800952,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x86ba2f561e92fd77:0x6d4235710f227289!2m2!1d-108.9977147!2d25.7933506?entry=ttu',
     },
     {
      id: 2,
      name:'Moyresa',
      image: 'https://container.aiyellow.com/pictures/400000_500000/400000_410000/402000_403000/402900_403000/402979/banners/402979_b.jpg',
      descripcion:'Taller de reparación de automóviles. Más de 7 años de actividad, Los Mochis, Sin',
      url:'https://www.google.com/maps/dir//Moreysa,+21+de+Marzo+450,+Jiquilpan,+81220+Los+Mochis,+Sin./data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x86ba28b18fa21401:0x99721eb84fbe0203?sa=X&ved=2ahUKEwj_w6X7x9GDAxVZhu4BHdIzA_gQ48ADegQIFBAA',

     },
     {
      id: 3,
      name:'Taller Mecanico Rene',
      image: 'https://lh3.googleusercontent.com/p/AF1QipOVbTgAxmgPzHL_uq9GX5Sk6MuhI67DABVeLQ6Y=s680-w680-h510',
      descripcion:'si',
      url:'https://www.google.com/maps/dir/25.8015232,-108.9732608/Taller+mec%C3%A1nico+rene,+Blvd.+Juan+de+Dios+B%C3%A1tiz+502,+El+parque,+81259+Los+Mochis,+Sin./@25.7984806,-108.9800229,16z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x86ba2f499e143e7b:0xfb0b598c53593201!2m2!1d-108.9768691!2d25.7961178?entry=ttu',
     },
     {
      id: 4,
      name:'Matoros',
      image: 'https://lh3.googleusercontent.com/p/AF1QipOsirnLowkFFOvn_7axV_dOTXgeb3H3RVpFxGOs=s680-w680-h510',
      descripcion:'si',
      url:'https://www.google.com/maps/dir//Taller+Maviut-Auto+Center+(+con+el+%22Vini%22+),+Ejido+9+de+Diciembre+862,+Roberto+Perez,+81257+Los+Mochis,+Sin./data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x86ba2f479185ccb9:0x653e3f4264edd5b1?sa=X&ved=2ahUKEwjkw62QydGDAxXUh-4BHcNjBU4Q48ADegQIEhAA',
     },
     {
      id: 5,
      name:'S. Mecanico Kelly',
      image: 'https://lh3.googleusercontent.com/proxy/Mt0-RVjuKqSB59S2AH-Zm71om-IAGJtG8h9ZV5dYnC87Azv6venfx0maRyfUwP0J0su7gn7dfADoLW1veR0hxxF9klLvjypceBF-YE60OJ6iPcCXYv4BrjBY1KI7xdhvWyreLPkcIba00R5K9JQYwV1mcELK6SJ7jtgRfA=s680-w680-h510',
      descripcion:'si',
      url:'https://www.google.com/maps/dir//Servicio+Mec%C3%A1nico+Kelly,+Parque+Nacional+757,+Del+Parque,+81259+Los+Mochis,+Sin./data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x86ba2f47d7175d77:0x21c5a83e2cba77be?sa=X&ved=2ahUKEwjkw62QydGDAxXUh-4BHcNjBU4Q48ADegQIERAA',
     },
     
     

    ];
    this.tallers.set(initTallers)
    this.tallerssnotsignal = (initTallers)

   }

}
