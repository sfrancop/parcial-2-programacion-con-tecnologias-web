import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Estudiante } from './estudiante.entity';
import { EstudianteService } from './estudiante.service';

@Module({
    imports: [TypeOrmModule.forFeature([Estudiante])],
    providers: [EstudianteService],
})
export class EstudianteModule {}
