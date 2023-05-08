//Dependencies
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

//Dto
import { CreateOfferDto } from './dto/create-offer.dto';
import { UpdateOfferDto } from './dto/update-offer.dto';

//Entity
import { Offer } from './entities/offer.entity';
import { Vehicle } from 'src/vehicles/entities/vehicle.entity';
import { OfferDetail } from 'src/offers_details/entities/offers_detail.entity';
import { OffersPromotion } from 'src/offers_promotion/entities/offers_promotion.entity';

@Injectable()
export class OffersService {
  constructor(
    @InjectModel(Offer)
    private OffersModel: typeof Offer,
  ) {}

  create(createOfferDto: CreateOfferDto) {
    try {
      return this.OffersModel.create(createOfferDto, {
        include: [OfferDetail, OffersPromotion],
      });
    } catch (e) {
      return e;
    }
  }

  findAll() {
    return this.OffersModel.findAndCountAll({
      group: ['vehicleId', 'partnerId'],
      include: [
        {
          model: Vehicle,
          as: 'vehicle',
          attributes: [
            'id',
            'name',
            'vehicleBrandId',
            'thumb',
            'route',
            'status',
          ],
        },
      ],
    });
  }

  findAllVehicle(partnerId: string) {
    return this.OffersModel.findAll({
      where: {
        partnerId: partnerId,
      },
      group: ['mileage'],
      order: ['price', 'DESC'],
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} offer`;
  }

  update(id: number, updateOfferDto: UpdateOfferDto) {
    return `This action updates a #${id} offer`;
  }

  remove(id: number) {
    return `This action removes a #${id} offer`;
  }
}
