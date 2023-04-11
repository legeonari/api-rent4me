//Module
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

//Services
import { OffersPromotionService } from './offers_promotion.service';

//Controllers
import { OffersPromotionController } from './offers_promotion.controller';

//Entity
import { OffersPromotion } from './entities/offers_promotion.entity';

@Module({
  imports: [SequelizeModule.forFeature([OffersPromotion])],
  controllers: [OffersPromotionController],
  providers: [OffersPromotionService],
})
export class OffersPromotionModule {}
