import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Proyecto } from './proyecto.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Proyecto])],
})
export class ProyectoModule {}
