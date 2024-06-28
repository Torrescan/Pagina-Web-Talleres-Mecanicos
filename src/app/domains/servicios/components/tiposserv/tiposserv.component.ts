import { CommonModule } from '@angular/common';
import { Component, Input, signal } from '@angular/core';
import { HeaderComponent } from '../../../shared/components/header/header.component';
import { servicios } from '../../../shared/models/car.model';
@Component({
  selector: 'app-tiposserv',
  standalone: true,
  imports: [CommonModule,HeaderComponent],
  templateUrl: './tiposserv.component.html',
  styleUrl: './tiposserv.component.css'
})
export class TiposservComponent {
  hideSideMenu = signal(true);
  @Input({required: true}) Services!: servicios;
  toogleSidemenu(){
    this.hideSideMenu.update(prevState => !prevState);
  }
  addServicesClient(){
//aqui agregamos el servicio del cliente mediante el push a su array con el input

  }
}
