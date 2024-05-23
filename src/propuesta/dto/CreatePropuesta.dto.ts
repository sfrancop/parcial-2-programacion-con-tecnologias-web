import { Profesor } from "src/profesor/profesor.entity";
import { Proyecto } from "src/proyecto/proyecto.entity";

export class CrearPropuestaDTO{
    titulo: string;
    descripcion: string
    palabraClave: string;
    proyecto?: Proyecto;
    profesor?: Profesor;
}