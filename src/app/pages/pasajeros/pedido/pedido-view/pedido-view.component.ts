import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Pedido, PedidoCreate } from 'src/app/_model/pedido.interface';
import { PedidoService } from 'src/app/_service/pedido.service';
import { Vehiculo } from 'src/app/_model/vehiculo.interface ';
import { VehiculoService } from 'src/app/_service/vehiculo.service';

@Component({
  selector: 'app-pedido-view',
  templateUrl: './pedido-view.component.html',
  styleUrls: ['./pedido-view.component.css']
})
export class PedidoViewComponent implements OnInit {
  
  pedido: PedidoCreate;
  idPedido: string
  vehiculo : Vehiculo
  idVehiculo : string

  constructor(
    private _formBuilder: FormBuilder,
    private _pedidoService : PedidoService,
    private _vehiculoService : VehiculoService,
    public _activeModal: NgbActiveModal,
  ) { }

  ngOnInit(): void {

    const intervalID = setInterval(() =>{
      this._pedidoService.getItemById(this.idPedido).subscribe(data =>{
        if(data?.idVehiculo){
          this.idVehiculo = data.idVehiculo
          this.getTaxista()
          clearInterval(intervalID);
          console.log("Pedido Aceptado");
        }
      })
    }, 10000);
  }

  getTaxista(){
    this._vehiculoService.getItemById(this.idVehiculo).subscribe(data =>{
      this.vehiculo = data
    })
  }

  closeModal() {
    this._activeModal.close();
  }

}
