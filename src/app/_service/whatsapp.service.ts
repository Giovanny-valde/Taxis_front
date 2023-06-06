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
export class WhatsappService {

  constructor(
   private _http: HttpClient
  ) {

  }

  sendWhatsapp(celular: string , mensaje : string) {
    let data = {
        "phone": `57${celular}`,
        "message": mensaje
    }
    const url = `${environment.HOSTWS}lead`;
    return this._http.post<any>(url, data);
   }

}

