import { Module } from '@nestjs/common';
import { ProyectoPropuestaService } from './proyecto-propuesta.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Proyecto } from 'src/proyecto/proyecto.entity';
import { Propuesta } from 'src/propuesta/propuesta.entity';
import { ProyectoPropuestaController } from './proyecto-propuesta.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Proyecto, Propuesta])],
  providers: [ ProyectoPropuestaService],
  exports: [ProyectoPropuestaService],
  controllers: [ProyectoPropuestaController]
})
export class ProyectoPropuestaModule {}
