import { Profesor } from "src/profesor/profesor.entity";
import { Proyecto } from "src/proyecto/proyecto.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";

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

    @OneToOne(() => Proyecto, proyecto => proyecto.propuesta, {nullable: true})
    @JoinColumn()
    proyecto: Proyecto;

    @ManyToOne(() => Profesor, profesor => profesor.propuestas)
    profesor: Profesor;
}