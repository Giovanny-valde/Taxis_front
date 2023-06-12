import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { NgxSpinnerService } from "ngx-spinner";
import { PedidoService } from 'src/app/_service/pedido.service';
import { Pedido } from 'src/app/_model/pedido.interface';
import { EnumPedidoEstado } from 'src/app/_model/enums/pedido.estado.enum';
import { WhatsappService } from 'src/app/_service/whatsapp.service';
import { VehiculoService } from 'src/app/_service/vehiculo.service';
import { SocketService,  } from 'src/app/_service/socket.service';

@Component({
  selector: 'app-pedido-taxista',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoTaxistaComponent implements OnInit {

  idVehiculo : string
  pedidos: Pedido[];
  isNotification : boolean 

  constructor(
    private _router: Router,
    private _pedidoService : PedidoService,
    private _vehiculoService : VehiculoService,
    private _whatsappService : WhatsappService,
    private _socketService : SocketService,
    private spinner : NgxSpinnerService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    // this.isNotification = false
    // console.log(this.isNotification);
    this.getPedidos()  
    this._socketService.get().subscribe(data =>{
      this.pedidos.push(data.response)
      if(this.isNotification){
        const audio = new Audio();
        audio.src = 'assets/timbretimbrecasa.mp3'; // Ruta al archivo de sonido
        audio.load(); // Carga el archivo de sonido
        audio.play(); // Reproduce el sonido
      }
      // console.log(this.pedidos);
    })
  }

  getPedidos() {
    this.spinner.show();
    this._pedidoService.getItems().subscribe(data => {
      console.log(data);
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
