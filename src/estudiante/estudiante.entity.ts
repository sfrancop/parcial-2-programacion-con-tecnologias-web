import { Proyecto } from "src/proyecto/proyecto.entity";
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";

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

    @OneToOne(() => Proyecto, proyecto => proyecto.estudiante, {nullable: true})
    proyecto: Proyecto;
}