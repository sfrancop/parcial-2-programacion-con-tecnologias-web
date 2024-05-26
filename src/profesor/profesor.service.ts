import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Profesor } from './profesor.entity';
import { DeleteResult, Repository } from 'typeorm';
import { CrearProfesorDTO } from './dto/CrearProfesorDTO';
import { ProfesorPropuestaService } from 'src/profesor-propuesta/profesor-propuesta.service';
import { ProyectoPropuestaService } from 'src/proyecto-propuesta/proyecto-propuesta.service';
import { Propuesta } from 'src/propuesta/propuesta.entity';

@Injectable()
export class ProfesorService {

    constructor(
        @InjectRepository(Profesor)
        private readonly profesorRepository: Repository<Profesor>,
        @InjectRepository(Propuesta)
        private readonly propuestaRepository: Repository<Propuesta>,
        private readonly profesorPropuestaService: ProfesorPropuestaService,
        private readonly proyectoPropuestaService: ProyectoPropuestaService
    ){}

    async crearProfesor(profesor: CrearProfesorDTO): Promise<Profesor>{
        if(profesor.grupoInvestigacion=="TICSW" || profesor.grupoInvestigacion=="IMAGINE" || profesor.grupoInvestigacion=="COMIT"){
            const nuevoProfesor = await this.profesorRepository.create(profesor)
            return await this.profesorRepository.save(nuevoProfesor)
        }else{
            throw new HttpException("El grupo de investigación debe estar entre los siguientes valores: TICSW, IMAGINE o COMIT ", HttpStatus.BAD_REQUEST)
        }
    }

    async findPorfesorById(id: number): Promise<Profesor>{
        return await this.profesorRepository.findOne({
            where:{
                id: id
            },
            relations:['propuestas']
        })
    }

    async eliminarProfesorById(id: number): Promise<DeleteResult>{
        const propuestas = await this.profesorPropuestaService.obtenerPropuestasPorProfesor(id, "id")
        if (propuestas== null || propuestas.length==0){
            return await this.profesorRepository.delete({id: id})
        }else{
            for (let propuesta of propuestas){
                const proyecto = await this.proyectoPropuestaService.obtenerProyectoPorPropuesta(propuesta.id)
                if (proyecto!=null || proyecto!=undefined){
                    throw new HttpException("El profesor no se puede eliminar porque tiene una propuesta que tiene un proyecto asociado", HttpStatus.BAD_REQUEST)
                }else{
                    propuesta.profesor = null
                    await this.propuestaRepository.update(propuesta.id, propuesta)
                }
            }
            return await this.profesorRepository.delete({id: id})
        }
    }

    async eliminarProfesorByCedula(cedula: number): Promise<DeleteResult>{
        const propuestas = await this.profesorPropuestaService.obtenerPropuestasPorProfesor(cedula, "cedula")
        if (propuestas== null || propuestas.length==0){
            return await this.profesorRepository.delete({numeroCedula: cedula})
        }else{
            for (let propuesta of propuestas){
                const proyecto = await this.proyectoPropuestaService.obtenerProyectoPorPropuesta(propuesta.id)
                if (proyecto!=null || proyecto!=undefined){
                    throw new HttpException("El profesor no se puede eliminar porque tiene una propuesta que tiene un proyecto asociado", HttpStatus.BAD_REQUEST)
                }else{
                    propuesta.profesor = null
                    await this.propuestaRepository.update(propuesta.id, propuesta)
                }
            }
            return await this.profesorRepository.delete({numeroCedula: cedula})
        }
    }

}
