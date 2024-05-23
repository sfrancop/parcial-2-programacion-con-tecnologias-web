import { Module } from '@nestjs/common';
import { Propuesta } from './propuesta.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PropuestaService } from './propuesta.service';

@Module({
    imports: [TypeOrmModule.forFeature([Propuesta])],
    providers: [PropuestaService],
})
export class PropuestaModule {}
