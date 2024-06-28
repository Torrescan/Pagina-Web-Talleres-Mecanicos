import { Component, inject, signal } from '@angular/core';
import { SHARED_COMPONENTS } from '../../../shared/shared.exports';
import { computeMsgId } from '@angular/compiler';
import { CommonModule } from '@angular/common';
import { talleres } from '../../../shared/models/car.model';
import { TalleresService } from '../../../shared/services/talleres.service';
import { InfotallComponent } from '../../components/infotall/infotall.component';
@Component({
  selector: 'app-talleresdispo',
  standalone: true,
  imports: [CommonModule,SHARED_COMPONENTS,InfotallComponent],
  templateUrl: './talleresdispo.component.html',
  styleUrl: './talleresdispo.component.css'
})
export class TalleresdispoComponent {
  talleres =signal<talleres[]>([]);
  private TallersSerivces= inject(TalleresService);
  ngOnInit(){
    // this.marcas.set(this.MarcasModels.obtainMarc())
  this.talleres.update(this.TallersSerivces.tallers)
    //this.marcas.set(this.MarcasModels.models)
    
   }
}
