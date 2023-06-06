import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GenericService } from './generic.service';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Pedido, PedidoCreate } from '../_model/pedido.interface';
import { PageResponse } from '../_model/page-response.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PedidoService extends GenericService<Pedido>{

  constructor(
    protected override _http: HttpClient
  ) {
    super(
      _http,
      `${environment.HOST}pedido`
    )
  }

  getByVehiculoId(id: string) {
    const url = `${environment.HOST}/pedido/byVehiculo/${id}`;
    return this._http.get<Pedido[]>(url);
   }

   override saveItem(t: PedidoCreate): Observable<any> {
    return this._http.post(this._url, t);
   }

}

