// import { Tienda } from './tienda.interface';

import { Persona } from "./persona.interface";
import { Vehiculo } from "./vehiculo.interface ";

export interface Pedido {
    id: string;
    persona: PersonaPedido;
    estado: number;
    vehiculo : Vehiculo
    idVehiculo? : string
}

export interface PedidoCreate {
    persona: PersonaPedido;
}

interface PersonaPedido {
    persona? :Persona
    nombre? : string
    barrio? : string
    direccion? : string
    telefono? : string
}

