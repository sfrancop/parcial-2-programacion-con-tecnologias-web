import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Profesor } from './profesor.entity';
import { ProfesorService } from './profesor.service';

@Module({
    imports: [TypeOrmModule.forFeature([Profesor])],
    providers: [ProfesorService],
})
export class ProfesorModule {}
