import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Classification } from 'entity/Classification';
import { Repository } from 'typeorm';
import { GetRatingResponse } from './classifier.controller.d';

@Controller('classifier')
export class ClassifierController {
  constructor(
    @InjectRepository(Classification)
    private classificationRepository: Repository<Classification>,
  ) {}

  @Post()
  async updateClassification(@Body() classification: Classification) {
    await this.classificationRepository.save(classification);
    return classification;
  }

  @Get()
  async getRating(
    @Query('articleId') articleId?: number,
  ): Promise<GetRatingResponse> {
    if (!articleId)
      throw new HttpException(
        'No article was provided',
        HttpStatus.BAD_REQUEST,
      );

    const classification = await this.classificationRepository.findOneBy({
      articleId,
    });

    if (!classification?.id)
      throw new HttpException(
        'No classification was found',
        HttpStatus.BAD_REQUEST,
      );

    return {
      rating: classification.rating,
    };
  }
}
