//Dependencies
import { Sequelize } from 'sequelize-typescript';
import { InjectModel } from '@nestjs/sequelize';
import { Injectable } from '@nestjs/common';

//Entity
import { OfferDetail } from './entities/offers_detail.entity';
import { OffersPromotion } from 'src/offers_promotion/entities/offers_promotion.entity';

@Injectable()
export class OffersDetailsService {
  constructor(
    @InjectModel(OfferDetail)
    private OfferDetailModel: typeof OfferDetail,
  ) {}

  findAllByVehicle(vehicleId: string) {
    return this.OfferDetailModel.findAll({
      where: {
        vehicleId: vehicleId,
      },
      attributes: [
        'mileage',
        'period',
        [Sequelize.fn('min', Sequelize.col('price')), 'min_price'],
      ],
      group: ['mileage', 'period'],
      order: [
        ['period', 'ASC'],
        ['mileage', 'ASC'],
      ],
      include: [
        {
          model: OffersPromotion,
          attributes: ['text'],
        },
      ],
    });
  }
}
