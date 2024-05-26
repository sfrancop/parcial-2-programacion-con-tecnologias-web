import { Module } from '@nestjs/common';
import { Propuesta } from './propuesta.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PropuestaService } from './propuesta.service';
import { PropuestaController } from './propuesta.controller';
import { Proyecto } from 'src/proyecto/proyecto.entity';
import { Profesor } from 'src/profesor/profesor.entity';
import { ProyectoPropuestaModule } from 'src/proyecto-propuesta/proyecto-propuesta.module';

@Module({
    imports: [TypeOrmModule.forFeature([Propuesta, Proyecto, Profesor]), ProyectoPropuestaModule],
    providers: [PropuestaService],
    controllers: [PropuestaController],
})
export class PropuestaModule {}
