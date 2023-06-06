import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { PasajeroRoutingModule } from './pasajero-routing.module';

import { NgSelectModule } from '@ng-select/ng-select';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NgxMaskModule } from 'ngx-mask';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { MenuPasajeroComponent } from './menu/menu.component';
import { PedidoPasajeroComponent } from './pedido/pedido.component';
import { FooterPasajeroComponent } from './footer/footer.component';
import { PedidoViewComponent } from './pedido/pedido-view/pedido-view.component';

@NgModule({
  declarations: [
    MenuPasajeroComponent,
    FooterPasajeroComponent,
    PedidoPasajeroComponent,
    PedidoViewComponent
  ],
  imports: [
    CommonModule,
    PasajeroRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgxSpinnerModule,
    NgSelectModule,
    NgbTooltipModule,
    NgxMaskModule.forChild()
  ]
})
export class PasajeroModule { }
