import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PedidoPasajeroComponent } from './pedido/pedido.component';

const routes: Routes = [
  {
    path: "",
    component: PedidoPasajeroComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PasajeroRoutingModule { }
