import { Body, Controller, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { OptionSerive } from "../services/option.service";
import { QuestionService } from "../services/question.service";
import { CreateOptionDto } from "../dto/createOptionDto";

@Controller('question/option')
export class OptionController{
    constructor(
        private optionService: OptionSerive,
        private questionService: QuestionService )
    {}

    @Post('')
    @UsePipes(ValidationPipe)
    async saveOptionToQuestion(@Body() createOption: CreateOptionDto){
        const question = await this.questionService.findQuestionById(createOption.questionId)
        if(question===null){
            throw Error('No question found corresponding to the given id')
        }
        const option = await this.optionService.createOption(createOption, question)
        return {question,createOption}
    }
}