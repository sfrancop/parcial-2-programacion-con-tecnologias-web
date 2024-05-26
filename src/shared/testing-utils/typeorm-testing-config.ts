import { TypeOrmModule } from "@nestjs/typeorm";
import { Estudiante } from "src/estudiante/estudiante.entity";
import { Profesor } from "src/profesor/profesor.entity";
import { Propuesta } from "src/propuesta/propuesta.entity";
import { Proyecto } from "src/proyecto/proyecto.entity";


export const TypeOrmTestingConfig = () => [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: ':memory:',
      dropSchema: true,
      entities: [Proyecto, Estudiante, Profesor, Propuesta],
      synchronize: true,
      keepConnectionAlive: true
    }),
    TypeOrmModule.forFeature([Proyecto, Estudiante, Profesor, Propuesta]),
   ];