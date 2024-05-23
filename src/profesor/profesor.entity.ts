import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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
}