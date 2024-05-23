import { Body, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Profesor } from './profesor.entity';
import { DeleteResult, Repository } from 'typeorm';
import { CrearProfesorDTO } from './dto/CrearProfesorDTO';

@Injectable()
export class ProfesorService {

    constructor(
        @InjectRepository(Profesor)
        private readonly profesorRepository: Repository<Profesor>
    ){}

    async crearProfesor(profesor: CrearProfesorDTO): Promise<Profesor>{
        const nuevoProfesor = await this.profesorRepository.create(profesor)
        return await this.profesorRepository.save(nuevoProfesor)
    }

    async findPorfesorById(id: number): Promise<Profesor>{
        return await this.profesorRepository.findOne({
            where:{
                id: id
            }
        })
    }

    async eliminarProfesorById(id: number): Promise<DeleteResult>{
        return await this.profesorRepository.delete({id: id})
    }

    async eliminarProfesorByCedula(cedula: number): Promise<DeleteResult>{
        return await this.profesorRepository.delete({numeroCedula: cedula})
    }

}
