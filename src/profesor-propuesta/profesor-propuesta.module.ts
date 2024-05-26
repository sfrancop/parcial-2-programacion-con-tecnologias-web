import { Module } from '@nestjs/common';
import { ProfesorPropuestaService } from './profesor-propuesta.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Profesor } from 'src/profesor/profesor.entity';
import { Propuesta } from 'src/propuesta/propuesta.entity';
import { ProfesorPropuestaController } from './profesor-propuesta.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Profesor, Propuesta])],
  providers: [ProfesorPropuestaService],
  exports: [ProfesorPropuestaService],
  controllers: [ProfesorPropuestaController]
})
export class ProfesorPropuestaModule {}
