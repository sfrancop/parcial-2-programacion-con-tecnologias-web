import { Estudiante } from "src/estudiante/estudiante.entity";
import { Propuesta } from "src/propuesta/propuesta.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({'name': 'proyecto'})
export class Proyecto{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'date'})
    fechaInicio: Date;

    @Column({type: 'date'})
    fechaFin: Date;

    @Column()
    url: string;

    @OneToOne(() => Estudiante, estudiante => estudiante.proyecto, {nullable: true})
    estudiante: Estudiante;

    @OneToOne(() => Propuesta, propuesta => propuesta.proyecto, {nullable: true})
    propuesta: Propuesta;

}