import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Profesor } from 'src/profesor/profesor.entity';
import { Propuesta } from 'src/propuesta/propuesta.entity';
import { Repository, UpdateResult } from 'typeorm';

@Injectable()
export class ProfesorPropuestaService {

    constructor(
        @InjectRepository(Profesor)
        private readonly profesorRepository: Repository<Profesor>,

        @InjectRepository(Propuesta)
        private readonly propuestarRepository: Repository<Propuesta>
    ){}

    async obtenerPropuestasPorProfesor(idProfesor: number, parametro:string): Promise<Propuesta[]>{
        if (parametro=="id"){
            const profesor = await this.profesorRepository.findOne({where: {id: idProfesor}})
            return await this.propuestarRepository.find({where:{profesor: profesor}}) 
        }else{
            const profesor = await this.profesorRepository.findOne({where: {numeroCedula: idProfesor}})
            return await this.propuestarRepository.find({where:{profesor: profesor}})
        }
    }

    async agregarPropuestaAProfesor(idProfesor: number, idPropuesta: number): Promise<UpdateResult>{
        const profesor = await this.profesorRepository.findOne({where: {id: idProfesor}})
        const propuesta = await this.propuestarRepository.findOne({where: {id: idPropuesta}})
        propuesta.profesor = profesor
        return await this.propuestarRepository.update(idPropuesta, propuesta)
    }

}
