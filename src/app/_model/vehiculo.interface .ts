import { Persona } from "./persona.interface";

export interface Vehiculo {
    id :string
    placa: string;
    habilitado : Boolean
    estado : number
    persona : Persona
}