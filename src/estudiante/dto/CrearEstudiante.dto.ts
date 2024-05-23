import { Proyecto } from "src/proyecto/proyecto.entity";

export class CrearEstudianteDTO{
    nombre: string;
    codigoEstudiante: string
    creditosAprobados: number;
    proyecto?: Proyecto;
}