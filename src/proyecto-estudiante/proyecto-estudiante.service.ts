import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Estudiante } from 'src/estudiante/estudiante.entity';
import { Proyecto } from 'src/proyecto/proyecto.entity';
import { Repository, UpdateResult } from 'typeorm';

@Injectable()
export class ProyectoEstudianteService {

    constructor(
        @InjectRepository(Proyecto)
        private readonly proyectoRepository: Repository<Proyecto>,

        @InjectRepository(Estudiante)
        private readonly estudianteRepository: Repository<Estudiante>
    ){}

    async enlazarEstudianteProyecto(idEstudiante: number, idProyecto: number): Promise<UpdateResult>{
        const estudiante = await this.estudianteRepository.findOne({where: {id: idEstudiante}})
        const proyecto = await this.proyectoRepository.findOne({where: {id: idProyecto}})
        proyecto.estudiante = estudiante
        return await this.proyectoRepository.update(idProyecto, proyecto)
    }

}
