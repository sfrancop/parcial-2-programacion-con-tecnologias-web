import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { Propuesta } from './propuesta.entity';
import { CrearPropuestaDTO } from './dto/CreatePropuesta.dto';

@Injectable()
export class PropuestaService {

    constructor(
        @InjectRepository(Propuesta)
        private readonly propuestaRepository: Repository<Propuesta>
    ){}

    async crearPropuesta(propuesta: CrearPropuestaDTO): Promise<Propuesta>{
        if (propuesta.titulo !== null && propuesta.titulo !== ''){
            const nuevoProfesor = await this.propuestaRepository.create(propuesta)
            return await this.propuestaRepository.save(nuevoProfesor)
        }
    }

    async findPropuestaById(id: number): Promise<Propuesta>{
        return await this.propuestaRepository.findOne({
            where:{
                id: id
            }
        })
    }

    async findAllPropuesta(): Promise<Propuesta[]>{
        return await this.propuestaRepository.find()
    }

    async deletePropuestaById(id: number): Promise<DeleteResult>{
        return await this.propuestaRepository.delete({id: id})
    }

}
