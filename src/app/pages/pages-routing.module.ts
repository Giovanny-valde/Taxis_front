import { EmpleadoComponent } from './administrador/empleado/empleado.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuPasajeroComponent } from './pasajeros/menu/menu.component';
import { MenuTaxistaComponent } from './taxista/menu/menu.component';

const routes: Routes = [
  {
    path: "A",
    component:MenuPasajeroComponent,
    loadChildren: () => import('./pasajeros/pasajero.module').then(m => m.PasajeroModule), 
  },
  {
    path: "",
    component:MenuTaxistaComponent,
    loadChildren: () => import('./taxista/taxista.module').then(m => m.TaxistaModule), 
  },
  // {
  //   path: "tienda",
  //   component: TiendaComponent,
  // },
  // {
  //   path: "ruta",
  //   component: RutaComponent,
  // },
  // {
  //   path: "empleado",
  //   component: EmpleadoComponent,
  // },
  // {
  //   path: "cobro",
  //   component: CobroComponent, 
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
