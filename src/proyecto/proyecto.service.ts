import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Proyecto } from './proyecto.entity';
import { Repository } from 'typeorm';
import { CrearProyectoDTO } from './dto/crear-proyecto.dto';

@Injectable()
export class ProyectoService {

    constructor(
        @InjectRepository(Proyecto)
        private readonly proyectoRepository: Repository<Proyecto>
    ){}

    async crearProyecto(proyecto: CrearProyectoDTO): Promise<Proyecto>{
        if (proyecto.fechaFin > proyecto.fechaInicio){
            const nuevoProyecto = await this.proyectoRepository.create(proyecto)
            return await this.proyectoRepository.save(nuevoProyecto)
        }else{
            throw new HttpException("La fecha de fin debe ser mayor a la fecha de inicio", HttpStatus.BAD_REQUEST)
        }
    }

}
