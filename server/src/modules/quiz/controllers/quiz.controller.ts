/* eslint-disable prettier/prettier */
import { Body, Controller, Get, HttpCode, Param, ParseIntPipe, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateQuizDto } from '../dto/createQuiz.dto';
import { QuizService } from '../services/quiz.service';

@Controller('quiz')
export class QuizController {
    constructor(private quizService: QuizService) {}

    @Get('/')
    getAllQuiz(){
        return this.quizService.getAllQuiz();
    }

    @Get('/:id')
    async getQuizById(@Param('id', ParseIntPipe) id: number){
        return await this.quizService.getQuizById(id)
    }

    @Post('/create')
    @UsePipes(ValidationPipe)
    async createQuiz(@Body() quizData:CreateQuizDto){
        return await this.quizService.createNewQuiz(quizData);
    }
}
