import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { TiposservComponent } from '../../components/tiposserv/tiposserv.component'; 
import { servicios } from '../../../shared/models/car.model';
import { ClientComponent } from '../../../clientes/pages/client/client.component';

@Component({
  selector: 'app-servicio',
  standalone: true,
  imports: [CommonModule, TiposservComponent,ClientComponent],
  templateUrl: './servicio.component.html',
  styleUrl: './servicio.component.css'
})
export class ServicioComponent {
  
  services = signal<servicios[]>([]);
  hideSideMenu = signal(true);
  constructor(){
    const InitServices: servicios[]=[
      {
        id: Date.now(),
        name: 'Reparacion de carro',
        cost: 500,
        image:'https://static.vecteezy.com/system/resources/previews/023/025/658/non_2x/car-service-and-repair-web-site-auto-service-concept-tiny-repairman-mechanics-characters-in-uniform-with-tools-and-tire-modern-flat-cartoon-style-illustration-on-white-background-vector.jpg',
      },
      {
        id: Date.now(),
        name: 'Carwash',
        cost: 500,
        image:'https://img.freepik.com/vector-premium/ilustracion-diseno-plano-servicio-lavado-coches-trabajadores-lavando-automoviles-esponjas-jabon-agua-como-fondo-poster-o-pancarta_2175-1995.jpg?size=626&ext=jpg',
      },
      {
        id: Date.now(),
        name: 'Cambio de piezas',
        cost: 500,
        image:'https://static.vecteezy.com/system/resources/previews/023/025/662/original/auto-service-concept-car-service-and-repair-tiny-repairman-mechanics-characters-in-uniform-with-tools-and-tire-modern-flat-cartoon-style-illustration-on-white-background-vector.jpg',
      },
      {
        id: Date.now(),
        name: 'Ajusto de programacion',
        cost: 500,
        image:'https://static.vecteezy.com/system/resources/previews/019/592/454/non_2x/mileage-car-equipment-color-icon-illustration-vector.jpg',
      },
    ];
    this.services.set(InitServices);
  }
  toogleSidemenu(){
    this.hideSideMenu.update(prevState => !prevState);
  }
  addmount(){
    
  }

}
