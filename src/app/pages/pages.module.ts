import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { PagesRoutingModule } from './pages-routing.module';

import { EmpleadoComponent } from './administrador/empleado/empleado.component';
import { FormEmpleadoComponent } from './administrador/empleado/form-empleado/form-empleado.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NgxMaskModule } from 'ngx-mask';
import { NgbTooltip, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { MenuPasajeroComponent } from './pasajeros/menu/menu.component';

@NgModule({
  declarations: [
    EmpleadoComponent,
    FormEmpleadoComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgxSpinnerModule,
    NgSelectModule,
    NgbTooltipModule,
    NgxMaskModule.forChild()
  ]
})
export class PagesModule { }
