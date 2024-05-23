import { Module } from '@nestjs/common';
import { Propuesta } from './propuesta.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([Propuesta])],
})
export class PropuestaModule {}
