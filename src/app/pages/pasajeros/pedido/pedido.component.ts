import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { EmpleadoService } from 'src/app/_service/empleado.service';
// import { RutaService } from 'src/app/_service/ruta.service';
import { NgxSpinnerService } from "ngx-spinner";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PedidoViewComponent } from './pedido-view/pedido-view.component';
import { Pedido, PedidoCreate } from 'src/app/_model/pedido.interface';
import { Barrio, barrios } from 'src/app/_model/barrios.interface';
import { Conjuntos, conjuntos } from 'src/app/_model/datosJson/conjuntos.interface';
import { PedidoService } from 'src/app/_service/pedido.service';
import { Vehiculo } from 'src/app/_model/vehiculo.interface ';
// import barrios from 'src/assets';

@Component({
  selector: 'app-pedido-pasajero',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoPasajeroComponent implements OnInit {
  
  form: FormGroup;
  barrios : Barrio[] = barrios.data
  idPedido : string
  conjuntos : Conjuntos[] = conjuntos.data
  vehiculo : Vehiculo
  isBarrio = true


  constructor(
    private _router: Router,
    // private _empleadoService : EmpleadoService,
    private _pedidoService : PedidoService,
    private _formBuilder: FormBuilder,
    private _modalService: NgbModal,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.initForm();
  }


  initForm() {
    this.form = this._formBuilder.group({
      nombre: [null , [Validators.required]],
      direccion : [null , [Validators.required]],
      barrio : [null ],
      telefono : [null ]
    })
  }

  openModal() {
    let values = this.form.value

    values.barrio?.direccion ? values.direccion = values.barrio.direccion : ""
    values.barrio ? values.barrio = values.barrio.nombre : ""
    
    let pedido : PedidoCreate = {
      persona : {direccion:values.direccion , nombre:values.nombre , barrio:values.barrio , telefono:values.telefono},
    }

    this._pedidoService.saveItem(pedido).subscribe(data =>{
      // 10 SEGUNDOS
      this.idPedido = data._id
     
      let modal = this._modalService.open(PedidoViewComponent)
      modal.componentInstance.pedido = pedido
      modal.componentInstance.idPedido = this.idPedido
  
      modal.result.then((result) => {
    })

    })
  }

}
