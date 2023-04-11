//Dependencies
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

//Dto
import { CreateOfferDto } from './dto/create-offer.dto';
import { UpdateOfferDto } from './dto/update-offer.dto';

//Entity
import { Offer } from './entities/offer.entity';

@Injectable()
export class OffersService {
  constructor(
    @InjectModel(Offer)
    private OffersModel: typeof Offer,
  ) {}

  create(createOfferDto: CreateOfferDto) {
    return 'This action adds a new offer';
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
