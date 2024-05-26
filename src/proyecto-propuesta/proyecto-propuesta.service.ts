import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Propuesta } from 'src/propuesta/propuesta.entity';
import { Proyecto } from 'src/proyecto/proyecto.entity';
import { Repository, UpdateResult } from 'typeorm';

@Injectable()
export class ProyectoPropuestaService {

    constructor(
        @InjectRepository(Proyecto)
        private readonly profesorRepository: Repository<Proyecto>,

        @InjectRepository(Propuesta)
        private readonly propuestarRepository: Repository<Propuesta>
    ){}

    async obtenerProyectoPorPropuesta(idPropuesta: number): Promise<Proyecto>{
        const propuesta = await this.propuestarRepository.findOne({where: {id: idPropuesta}})
        return await this.profesorRepository.findOne({where:{propuesta: propuesta}})
    }

    async enlazarProyectoPropuesta(idProyecto: number, idPropuesta: number): Promise<UpdateResult>{
        const proyecto = await this.profesorRepository.findOne({where: {id: idProyecto}})
        const propuesta = await this.propuestarRepository.findOne({where: {id: idPropuesta}})
        propuesta.proyecto = proyecto
        return await this.propuestarRepository.update(idPropuesta, propuesta)
    }

}
