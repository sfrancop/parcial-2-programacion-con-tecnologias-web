import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProfesorModule } from './profesor/profesor.module';
import { EstudianteModule } from './estudiante/estudiante.module';
import { PropuestaModule } from './propuesta/propuesta.module';
import { ProyectoModule } from './proyecto/proyecto.module';
import { ProyectoEstudianteModule } from './proyecto-estudiante/proyecto-estudiante.module';
import { ProyectoPropuestaModule } from './proyecto-propuesta/proyecto-propuesta.module';
import { ProfesorPropuestaModule } from './profesor-propuesta/profesor-propuesta.module';

@Module({
  imports: [
    // AQUI SE IMPORTAN LOS MODULOS
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'parcial',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    ProfesorModule,
    EstudianteModule,
    PropuestaModule,
    ProyectoModule,
    ProyectoEstudianteModule,
    ProyectoPropuestaModule,
    ProfesorPropuestaModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
