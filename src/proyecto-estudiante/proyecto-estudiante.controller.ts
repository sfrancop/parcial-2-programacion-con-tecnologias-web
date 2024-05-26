import { Controller, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { ProyectoEstudianteService } from './proyecto-estudiante.service';
import { Proyecto } from 'src/proyecto/proyecto.entity';
import { UpdateResult } from 'typeorm';

@Controller('estudiantes')
export class ProyectoEstudianteController {

    constructor(private readonly proyectoEstudianteService: ProyectoEstudianteService) {}

    @Put(":idEstudiante/proyecto/:idProyecto")
    async enlazarEstudianteProyecto(@Param('idEstudiante', ParseIntPipe) idEstudiante:number, @Param('idProyecto', ParseIntPipe) idProyecto:number): Promise<UpdateResult> {
        return await this.proyectoEstudianteService.enlazarEstudianteProyecto(idEstudiante, idProyecto);
    }

}
