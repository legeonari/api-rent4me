//Modules
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

//Services
import { OffersDetailsService } from './offers_details.service';

//Controllers
import { OffersDetailsController } from './offers_details.controller';

//Entity
import { OfferDetail } from './entities/offers_detail.entity';

@Module({
  imports: [SequelizeModule.forFeature([OfferDetail])],
  controllers: [OffersDetailsController],
  providers: [OffersDetailsService],
})
export class OffersDetailsModule {}
