/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { QuizController } from './controllers/quiz.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Quiz } from './entities/quiz.entity';
import { QuestionService } from './services/question.service';
import { Question } from './entities/question.entity';
import { QuestionController } from './controllers/question.controller';
import { QuizService } from './services/quiz.service';
import { Option } from './entities/option.entity';
import { OptionController } from './controllers/option.controller';
import { OptionSerive } from './services/option.service';

@Module({
    controllers: [QuizController, QuestionController,OptionController],
    imports: [TypeOrmModule.forFeature([Quiz,Question,Option]),],
    providers: [QuizService,QuestionService,OptionSerive]
})
export class QuizModule {}
