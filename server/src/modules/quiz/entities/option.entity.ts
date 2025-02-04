import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Quiz } from "./quiz.entity";
import { Question } from "./question.entity";

@Entity('options')
export class Option extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column({
        type: 'varchar'
    })
    text:string

    @Column({
        type: 'boolean',
    })
    isCorrect: Boolean

    @ManyToOne(()=> Question, (question)=> question.options)
    question: Question
}