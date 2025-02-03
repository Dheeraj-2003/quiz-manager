import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateQuizDto } from "../dto/createQuiz.dto";
import { Quiz } from "../entities/quiz.entity";
import { QuizRepository } from "../repositories/quiz.repository";

@Injectable()
export class QuizService{
    constructor(
        @InjectRepository(Quiz) private quizRepository : QuizRepository,
    ) {}

    getAllQuiz(){
        return [1,2,3];
    }

    async getQuizById(id:number): Promise<Quiz | null>{
        return await this.quizRepository.findOne({
            where:{id},
            relations: ['questions'],
        });
    }

    async createNewQuiz(quiz: CreateQuizDto){
        return await this.quizRepository.save(quiz)
    }
}