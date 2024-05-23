import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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
}