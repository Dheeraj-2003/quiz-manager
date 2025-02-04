import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Option } from "../entities/option.entity";
import { CreateOptionDto } from "../dto/createOptionDto";
import { Question } from "../entities/question.entity";

@Injectable()
export class OptionSerive{
    constructor(
        @InjectRepository(Option) 
        private optionRepository: Repository<Option>
    ){}

    async createOption(option: CreateOptionDto, question: Question){
        const newOption= await this.optionRepository.save({
            text: option.text,
            isCorrect: option.isCorrect
        })
        question.options.push(newOption)
        await question.save()
        return newOption
    }
}