import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Proyecto } from './proyecto.entity';
import { ProyectoService } from './proyecto.service';

@Module({
    imports: [TypeOrmModule.forFeature([Proyecto])],
    providers: [ProyectoService],
})
export class ProyectoModule {}
