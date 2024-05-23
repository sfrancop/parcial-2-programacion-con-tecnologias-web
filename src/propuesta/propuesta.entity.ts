import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({'name': 'propuesta'})
export class Propuesta{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    titulo: string;

    @Column()
    descripcion: string

    @Column()
    palabraClave: string;
}