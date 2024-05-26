import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Profesor } from './profesor.entity';
import { ProfesorService } from './profesor.service';
import { ProfesorPropuestaModule } from 'src/profesor-propuesta/profesor-propuesta.module';
import { ProyectoPropuestaModule } from 'src/proyecto-propuesta/proyecto-propuesta.module';
import { ProfesorController } from './profesor.controller';
import { Propuesta } from 'src/propuesta/propuesta.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Profesor, Propuesta]), ProfesorPropuestaModule, ProyectoPropuestaModule],
    providers: [ProfesorService],
    controllers: [ProfesorController],
})
export class ProfesorModule {}
