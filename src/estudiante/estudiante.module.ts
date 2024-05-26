import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Estudiante } from './estudiante.entity';
import { EstudianteService } from './estudiante.service';
import { EstudianteController } from './estudiante.controller';
import { ProyectoModule } from 'src/proyecto/proyecto.module';

@Module({
    imports: [TypeOrmModule.forFeature([Estudiante]), ProyectoModule],
    providers: [EstudianteService],
    controllers: [EstudianteController],
})
export class EstudianteModule {}
