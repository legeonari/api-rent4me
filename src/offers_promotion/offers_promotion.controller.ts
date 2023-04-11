import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OffersPromotionService } from './offers_promotion.service';
import { CreateOffersPromotionDto } from './dto/create-offers_promotion.dto';
import { UpdateOffersPromotionDto } from './dto/update-offers_promotion.dto';

@Controller('offers-promotion')
export class OffersPromotionController {
  constructor(private readonly offersPromotionService: OffersPromotionService) {}

  @Post()
  create(@Body() createOffersPromotionDto: CreateOffersPromotionDto) {
    return this.offersPromotionService.create(createOffersPromotionDto);
  }

  @Get()
  findAll() {
    return this.offersPromotionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.offersPromotionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOffersPromotionDto: UpdateOffersPromotionDto) {
    return this.offersPromotionService.update(+id, updateOffersPromotionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.offersPromotionService.remove(+id);
  }
}
