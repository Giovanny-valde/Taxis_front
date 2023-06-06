import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GenericService } from './generic.service';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Pedido, PedidoCreate } from '../_model/pedido.interface';
import { PageResponse } from '../_model/page-response.interface';
import { Observable } from 'rxjs';
import { Vehiculo } from '../_model/vehiculo.interface ';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService extends GenericService<Vehiculo>{

  constructor(
    protected override _http: HttpClient
  ) {
    super(
      _http,
      `${environment.HOST}vehiculo`
    )
  }


}

