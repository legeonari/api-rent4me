//Modules
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

//Services
import { OffersService } from './offers.service';

//Controllers
import { OffersController } from './offers.controller';

//Entity
import { Offer } from './entities/offer.entity';

@Module({
  imports: [SequelizeModule.forFeature([Offer])],
  controllers: [OffersController],
  providers: [OffersService],
})
export class OffersModule {}
