import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { EstudianteService } from './estudiante.service';
import { Estudiante } from './estudiante.entity';
import { CrearEstudianteDTO } from './dto/CrearEstudiante.dto';

@Controller('estudiantes')
export class EstudianteController {

    constructor(
        private readonly estudianteService: EstudianteService
    ) {}

    @Get(':idEstudiante')
    async findEstudianteById(@Param('idEstudiante', ParseIntPipe) idEstudiante: number): Promise<Estudiante> {
        return await this.estudianteService.findEstudianteById(idEstudiante); 
    }

    @Post()
    async create(@Body() estudiante: CrearEstudianteDTO): Promise<Estudiante> {
        return await this.estudianteService.crearEstudiante(estudiante);
    }
}
