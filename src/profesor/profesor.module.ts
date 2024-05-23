import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Profesor } from './profesor.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Profesor])],
})
export class ProfesorModule {}
