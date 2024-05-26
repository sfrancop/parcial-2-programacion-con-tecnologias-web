import { Controller, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { ProfesorPropuestaService } from './profesor-propuesta.service';
import { Profesor } from 'src/profesor/profesor.entity';
import { Propuesta } from 'src/propuesta/propuesta.entity';
import { UpdateResult } from 'typeorm';

@Controller('profesores')
export class ProfesorPropuestaController {

    constructor(private readonly profesorPropuestaService: ProfesorPropuestaService) {}

    @Put(':idProfesor/propuesta/:idPropuesta')
    async enlazarPropuestaProfesor(@Param('idProfesor', ParseIntPipe) idProfesor:number, @Param('idPropuesta', ParseIntPipe) idPropuesta:number): Promise<UpdateResult> {
       return  await this.profesorPropuestaService.agregarPropuestaAProfesor(idProfesor, idPropuesta);
    }

}
