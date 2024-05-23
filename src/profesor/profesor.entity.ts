import { Propuesta } from "src/propuesta/propuesta.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({'name': 'profesor'})
export class Profesor{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    numeroCedula: number;

    @Column()
    nombre: string;

    @Column()
    grupoInvestigacion: string

    @Column()
    numeroExtension: number;

    @OneToMany(() => Propuesta, propuesta => propuesta.profesor)
    propuestas: Propuesta[];
}