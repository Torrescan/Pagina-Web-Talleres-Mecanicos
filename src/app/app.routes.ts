import { Routes } from '@angular/router';
import { ListaComponent } from './domains/modelos/pages/lista/lista.component';
import { AcercaComponent } from './domains/informacion/pages/acerca/acerca.component';
import { TalleresdispoComponent } from './domains/talleres/pages/talleresdispo/talleresdispo.component';
import { ServicioComponent } from './domains/servicios/pages/servicio/servicio.component';
import { ClientComponent } from './domains/clientes/pages/client/client.component';
import { NotFoundComponent } from './domains/informacion/pages/not-found/not-found.component';
import { LayoutComponent } from './domains/shared/components/layout/layout.component';
import { InfomarcaComponent } from './domains/marca/pages/infomarca/infomarca.component';
import { DetalleMarcaComponent } from './domains/marca/pages/detalle-marca/detalle-marca.component';
import { DetallestallerComponent } from './domains/talleres/pages/detallestaller/detallestaller.component';
import { ClientdetailComponent } from './domains/clientes/pages/clientdetail/clientdetail.component';
import { AboutComponent } from './domains/informacion/pages/about/about.component';
export const routes: Routes = [
 
    {
        path:'',
        component: LayoutComponent,
        children: [
            
            {
                path: '',
                component: AcercaComponent
            },
            {
                path: 'talleres',
                component: TalleresdispoComponent
            },
            {
                path: 'clientes',
                component: ClientComponent
            },
            {
                path: 'servicios',
                component: ServicioComponent
            },
            {
                path: 'modelos',
                component: ListaComponent
            },
            {
                path: 'marcas',
                component: InfomarcaComponent
            },
            {
                path: 'detallem/:id',
                component: DetalleMarcaComponent
            },
            {
                path: 'detalleta/:id',
                component: DetallestallerComponent
            },
            {
                path: 'detallecli/:id',
                component: ClientdetailComponent
            },
            {
                path: 'about',
                component: AboutComponent
            },
          
        ]
    },
  
    {
        path: '**',
        component: NotFoundComponent
    },

];
