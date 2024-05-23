import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Estudiante } from './estudiante.entity';
import { CrearEstudianteDTO } from './dto/CrearEstudiante.dto';

@Injectable()
export class EstudianteService {

    constructor(
        @InjectRepository(Estudiante)
        private readonly estudianteRepository: Repository<Estudiante>
    ){}

    async crearEstudiante(estudiante: CrearEstudianteDTO): Promise<Estudiante>{
        if (estudiante.codigoEstudiante.length == 10){
            const nuevoProfesor = await this.estudianteRepository.create(estudiante)
            return await this.estudianteRepository.save(nuevoProfesor)
        }
    }

    async findEstudianteById(id: number): Promise<Estudiante>{
        return await this.estudianteRepository.findOne({
            where:{
                id: id
            }
        })
    }

}
