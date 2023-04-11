import { PartialType } from '@nestjs/swagger';
import { CreateOffersPromotionDto } from './create-offers_promotion.dto';

export class UpdateOffersPromotionDto extends PartialType(CreateOffersPromotionDto) {}
