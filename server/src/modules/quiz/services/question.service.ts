import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateQuestionDto } from "../dto/createQuestionDto";
import { Quiz } from "../entities/quiz.entity";
import { Question } from "../entities/question.entity";

@Injectable()
export class QuestionService{
    constructor(
        @InjectRepository(Question) private questionRepository : Repository<Question>,
    ) {}

    async createQuestion(question: CreateQuestionDto, quiz: Quiz): Promise<Question>{
        const newQuestion = await this.questionRepository.save({
            question: question.question
        })

        quiz.questions.push(newQuestion)
        await quiz.save()
        return newQuestion
    }
}