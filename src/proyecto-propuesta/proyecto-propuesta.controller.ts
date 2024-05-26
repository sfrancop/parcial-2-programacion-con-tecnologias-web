import { Controller, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { ProyectoPropuestaService } from './proyecto-propuesta.service';
import { Proyecto } from 'src/proyecto/proyecto.entity';
import { Propuesta } from 'src/propuesta/propuesta.entity';
import { UpdateResult } from 'typeorm';

@Controller('propuestas')
export class ProyectoPropuestaController {

    constructor(private readonly proyectoPropuestaService: ProyectoPropuestaService) {}

    @Put(':idPropuesta/proyecto/:idProyecto')
    async enlazarProyectoPropuesta(@Param('idPropuesta', ParseIntPipe) idPropuesta: number, @Param('idProyecto', ParseIntPipe) idProyecto: number): Promise<UpdateResult> {
       return  await this.proyectoPropuestaService.enlazarProyectoPropuesta(idProyecto, idPropuesta);
    }

}
