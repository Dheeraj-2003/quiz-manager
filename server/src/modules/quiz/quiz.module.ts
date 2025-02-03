/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { QuizController } from './controllers/quiz.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Quiz } from './entities/quiz.entity';
import { QuestionService } from './services/question.service';
import { Question } from './entities/question.entity';
import { QuestionController } from './controllers/question.controller';
import { QuizService } from './services/quiz.service';

@Module({
    controllers: [QuizController, QuestionController],
    imports: [TypeOrmModule.forFeature([Quiz,Question]),],
    providers: [QuizService,QuestionService]
})
export class QuizModule {}
