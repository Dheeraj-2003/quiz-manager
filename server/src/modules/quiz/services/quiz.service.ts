import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateQuizDto } from "../dto/createQuiz.dto";
import { Quiz } from "../entities/quiz.entity";
import { QuizRepository } from "../repositories/quiz.repository";
import { Question } from "../entities/question.entity";

@Injectable()
export class QuizService{
    constructor(
        @InjectRepository(Quiz) private quizRepository : QuizRepository,
    ) {}

    async getAllQuiz(): Promise<Quiz[]>{
      return await this.quizRepository.createQueryBuilder('q')
      .leftJoinAndSelect('q.questions','qt')
      .getMany()
    }

    async getQuizById(id:number): Promise<Quiz | null>{
        return await this.quizRepository.findOne({
            where:{id},
            relations: ['questions', 'questions.options'],
        });
    }

    async createNewQuiz(quiz: CreateQuizDto){
        return await this.quizRepository.save(quiz)
    }
}