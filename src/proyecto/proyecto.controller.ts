import { Body, Controller, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Proyecto } from './proyecto.entity';
import { ProyectoService } from './proyecto.service';
import { CrearProyectoDTO } from './dto/crear-proyecto.dto';

@Controller('proyectos')
export class ProyectoController {

    constructor(
        private readonly proyectoService: ProyectoService
    ) {}

    @Post()
    async crearProyecto(@Body() proyecto: CrearProyectoDTO): Promise<Proyecto> {
        return await this.proyectoService.crearProyecto(proyecto);
    }

}
