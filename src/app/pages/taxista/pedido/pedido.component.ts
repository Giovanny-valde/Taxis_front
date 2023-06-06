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
import { VehiculoService } from 'src/app/_service/vehiculo.service';

@Component({
  selector: 'app-pedido-taxista',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoTaxistaComponent implements OnInit {

  idVehiculo : string
  pedidos: Pedido[];

  constructor(
    private _router: Router,
    private _pedidoService : PedidoService,
    private _vehiculoService : VehiculoService,
    private _whatsappService : WhatsappService,
    private spinner : NgxSpinnerService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.getPedidos()
  }

  getPedidos() {
    this.spinner.show();
    this._pedidoService.getItems().subscribe(data => {
      this.pedidos = data
      this.spinner.hide();
    });
  }

  acceptPedido(pedido : Pedido){
    this.idVehiculo = "646d865cd99f071214dfb309"
    pedido.estado = EnumPedidoEstado.Aceptado.id
    pedido.idVehiculo = this.idVehiculo
    this._pedidoService.updateItem(pedido, pedido.id).subscribe(data =>{
      // ruta a la pagina historial
      this._vehiculoService.getItemById(this.idVehiculo).subscribe(data =>{
        let vehiculo = data
        this._router.navigate(['/historial'])
        let mensaje = `¡Hola!, en unos minutos llegara por ti nuestro conductor ${vehiculo.persona.nombre} con el vehiculo de placa ${vehiculo.placa}`
        this._whatsappService.sendWhatsapp(pedido.persona.telefono as string ,mensaje).subscribe(data =>{
        })
      })
      
      this.getPedidos()
    })
  }
  

}
