import { Injectable } from '@nestjs/common';
import { CreateOffersPromotionDto } from './dto/create-offers_promotion.dto';
import { UpdateOffersPromotionDto } from './dto/update-offers_promotion.dto';

@Injectable()
export class OffersPromotionService {
  create(createOffersPromotionDto: CreateOffersPromotionDto) {
    return 'This action adds a new offersPromotion';
  }

  findAll() {
    return `This action returns all offersPromotion`;
  }

  findOne(id: number) {
    return `This action returns a #${id} offersPromotion`;
  }

  update(id: number, updateOffersPromotionDto: UpdateOffersPromotionDto) {
    return `This action updates a #${id} offersPromotion`;
  }

  remove(id: number) {
    return `This action removes a #${id} offersPromotion`;
  }
}
