import { Body, Controller, Param, Post, Get, Delete,} from '@nestjs/common';
import { ReviewDto } from './review.dto';
import { ReviewService } from './review.service';
  

  @Controller('reviews')
  export class ReviewController {
    constructor(
      private reviewService: ReviewService,
    ) {}
    @Post('/review')
    createReview(@Body() body: ReviewDto) {
      this.reviewService.create(
        body.rating,
        body. review,
      );
      return "review sent"
    }
  @Delete('/:id')
  addMeeting(@Param('id') id: string) {
    return this.reviewService.remove(parseInt(id));
  }
  @Get('/find')
  findMeeting(@Param('id')id: number) {
    return this.reviewService.find(id);
  }
}