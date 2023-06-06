import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PedidoTaxistaComponent } from './pedido/pedido.component';
import { HistorialTaxistaComponent } from './historial/historial.component';

// import { MenuPasajeroComponent } from './menu/menu.component';
// import { PedidoPasajeroComponent } from './pedido/pedido.component';

const routes: Routes = [
  {
    path: "",
    component: PedidoTaxistaComponent
  },
  {
    path: "historial",
    component: HistorialTaxistaComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaxistaRoutingModule { }
