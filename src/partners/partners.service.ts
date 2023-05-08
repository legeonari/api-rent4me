//Dependencies
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

//Dto
import { CreatePartnerDto } from './dto/create-partner.dto';
import { UpdatePartnerDto } from './dto/update-partner.dto';

//Entity
import { Partner } from './entities/partner.entity';

@Injectable()
export class PartnersService {
  constructor(
    @InjectModel(Partner)
    private PartnerModel: typeof Partner,
  ) {}

  create(createPartnerDto: CreatePartnerDto) {
    try {
      return this.PartnerModel.create(createPartnerDto);
    } catch (e) {
      return e;
    }
  }

  findAll() {
    try {
      return this.PartnerModel.findAndCountAll({});
    } catch (e) {
      return e;
    }
  }
}
