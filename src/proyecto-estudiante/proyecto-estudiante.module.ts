import { Module } from '@nestjs/common';
import { ProyectoEstudianteService } from './proyecto-estudiante.service';
import { Type } from 'class-transformer';
import { Proyecto } from 'src/proyecto/proyecto.entity';
import { Estudiante } from 'src/estudiante/estudiante.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProyectoEstudianteController } from './proyecto-estudiante.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Proyecto, Estudiante])],
  providers: [ProyectoEstudianteService],
  controllers: [ProyectoEstudianteController]
})
export class ProyectoEstudianteModule {}
