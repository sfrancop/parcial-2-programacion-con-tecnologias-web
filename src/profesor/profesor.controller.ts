import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { ProfesorService } from './profesor.service';
import { CrearProfesorDTO } from './dto/CrearProfesorDTO';
import { Profesor } from './profesor.entity';
import { DeleteResult } from 'typeorm';

@Controller('profesores')
export class ProfesorController {

    constructor(private readonly profesorService: ProfesorService) {}

    @Get(':id')
    async findById(@Param('id', ParseIntPipe) id: number): Promise<Profesor> {
      return await this.profesorService.findPorfesorById(id);
    }

    @Post()
    async create(@Body() profesor: CrearProfesorDTO): Promise<Profesor> {
      return await this.profesorService.crearProfesor(profesor);
    }

    @Delete('id/:id')
    async deleteById(@Param('id', ParseIntPipe) id: number): Promise<DeleteResult>{
      return await this.profesorService.eliminarProfesorById(id);
    }

    @Delete('cedula/:cedula')
    async deleteByCedula(@Param('cedula', ParseIntPipe) cedula: number): Promise<DeleteResult>{
      return await this.profesorService.eliminarProfesorByCedula(cedula);
    }

}
