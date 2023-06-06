import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { TaxistaRoutingModule } from './taxista-routing.module';

import { NgSelectModule } from '@ng-select/ng-select';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NgxMaskModule } from 'ngx-mask';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { MenuTaxistaComponent } from './menu/menu.component';
import { FooterTaxistaComponent } from './footer/footer.component';
import { PedidoTaxistaComponent } from './pedido/pedido.component';
import { HistorialTaxistaComponent } from './historial/historial.component';

@NgModule({
  declarations: [
    MenuTaxistaComponent,
    FooterTaxistaComponent,

    PedidoTaxistaComponent,
    HistorialTaxistaComponent
  ],
  imports: [
    CommonModule,
    TaxistaRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgxSpinnerModule,
    NgSelectModule,
    NgbTooltipModule,
    NgxMaskModule.forChild()
  ]
})
export class TaxistaModule { }
