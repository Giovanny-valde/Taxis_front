import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { EmpleadoService } from 'src/app/_service/empleado.service';
// import { RutaService } from 'src/app/_service/ruta.service';
import { NgxSpinnerService } from "ngx-spinner";
import { PedidoService } from 'src/app/_service/pedido.service';
import { Pedido } from 'src/app/_model/pedido.interface';
import { Observable } from 'rxjs';
import { EnumPedidoEstado } from 'src/app/_model/enums/pedido.estado.enum';
import { EnumVehiculoEstado } from 'src/app/_model/enums/vehiculo.estado.enum';
import { WhatsappService } from 'src/app/_service/whatsapp.service';

@Component({
  selector: 'app-historial-taxista',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})
export class HistorialTaxistaComponent implements OnInit {

  enumPedidoEstado = EnumPedidoEstado
  idVehichulo : string
  pedidos: Pedido[];

  constructor(
    private _router: Router,
    private _pedidoService : PedidoService,
    private _whatsappService : WhatsappService,
    private spinner : NgxSpinnerService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.getPedidos()
  }

  getPedidos() {
    this.idVehichulo = "646d865cd99f071214dfb309"
    this.spinner.show();
    this._pedidoService.getByVehiculoId(this.idVehichulo).subscribe(data => {
      this.pedidos = data
      this.spinner.hide();
    });
  }

  changeStatusPedido(pedido : Pedido, estado : number){

    // console.log(estado);
    // this.idVehichulo = "646d865cd99f071214dfb309"
    pedido.estado = estado
    
    // pedido.idVehiculo = this.idVehichulo
    this._pedidoService.updateItem(pedido,pedido.id).subscribe(data =>{
      // console.log(data);
      if(pedido.estado == this.enumPedidoEstado.Cerca.id){
        let mensaje = `¡Ey!, nuestro conductor esta proximo a llegar`
        this._whatsappService.sendWhatsapp(pedido.persona.telefono as string ,mensaje).subscribe(data =>{
        })
      }
      if(pedido.estado == this.enumPedidoEstado.Finalizado.id){
        let mensaje = `¡Nuestro recorrido finalizo!, muchas gracias por preferirnos, no olvides dejar una reseña de como te parecio el servio y nos veremos en una proxima ocasion`
        this._whatsappService.sendWhatsapp(pedido.persona.telefono as string ,mensaje).subscribe(data =>{
        })
      }
      this.getPedidos()
    })
  }
  

}
