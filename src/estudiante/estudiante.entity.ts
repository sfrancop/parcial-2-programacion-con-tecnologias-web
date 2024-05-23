import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({'name': 'estudiante'})
export class Estudiante{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @Column()
    codigoEstudiante: string

    @Column()
    creditosAprobados: number;
}