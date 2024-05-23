import { Module } from '@nestjs/common';
import { Propuesta } from './propuesta.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PropuestaService } from './propuesta.service';
import { PropuestaController } from './propuesta.controller';

@Module({
    imports: [TypeOrmModule.forFeature([Propuesta])],
    providers: [PropuestaService],
    controllers: [PropuestaController],
})
export class PropuestaModule {}
