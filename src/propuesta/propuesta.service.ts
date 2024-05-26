import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { Propuesta } from './propuesta.entity';
import { CrearPropuestaDTO } from './dto/CreatePropuesta.dto';
import { ProyectoPropuestaService } from 'src/proyecto-propuesta/proyecto-propuesta.service';

@Injectable()
export class PropuestaService {

    constructor(
        @InjectRepository(Propuesta)
        private readonly propuestaRepository: Repository<Propuesta>,

        private readonly proyectoPropuestaService: ProyectoPropuestaService
    ){}

    async crearPropuesta(propuesta: CrearPropuestaDTO): Promise<Propuesta>{
        if (propuesta.titulo !== null && propuesta.titulo !== ''){
            const nuevaPropuesta = await this.propuestaRepository.create(propuesta)
            return await this.propuestaRepository.save(nuevaPropuesta)
        }else{
            throw new HttpException("El título de la propuesta no puede estar vacio", HttpStatus.BAD_REQUEST)
        }
    }

    async findPropuestaById(id: number): Promise<Propuesta>{
        return await this.propuestaRepository.findOne({
            where:{
                id: id
            }
            ,
            relations:['profesor', 'proyecto']
        })
    }

    async findAllPropuesta(): Promise<Propuesta[]>{
        return await this.propuestaRepository.find({relations:['profesor', 'proyecto']})
    }

    async deletePropuestaById(id: number): Promise<DeleteResult>{
        const proyecto = await this.proyectoPropuestaService.obtenerProyectoPorPropuesta(id)
        if (proyecto!=null || proyecto!=undefined){
            throw new HttpException("La propuesta no se puede eliminar porque tiene un proyecto asociado", HttpStatus.BAD_REQUEST)
        }else{
            return await this.propuestaRepository.delete({id: id})
        }
    }

}
