//Dependencies
import { Op } from 'sequelize';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

//Dtos
import { CreateVehicleDto } from './dto/create-vehicle.dto';
import { UpdateVehicleDto } from './dto/update-vehicle.dto';

//Entity
import { Vehicle } from './entities/vehicle.entity';
import { VehiclesDimension } from 'src/vehicles_dimensions/entities/vehicles_dimension.entity';
import { VehiclesItem } from 'src/vehicles_itens/entities/vehicles_item.entity';
import { VehiclesMotor } from 'src/vehicles_motor/entities/vehicles_motor.entity';
import { VehiclesStore } from 'src/vehicles_stores/entities/vehicles_store.entity';
import { VehiclesStoresContent } from 'src/vehicles_stores_contents/entities/vehicles_stores_content.entity';
import { VehiclesGallery } from 'src/vehicles_gallery/entities/vehicles_gallery.entity';
import { VehiclesOptionsIten } from 'src/vehicles_options_itens/entities/vehicles_options_item.entity';
import { VehiclesBrand } from 'src/vehicles_brand/entities/vehicles_brand.entity';
import { VehiclesCategory } from 'src/vehicles_categories/entities/vehicles_category.entity';
import { FilesImage } from 'src/files_images/entities/files_image.entity';
import { FilterVehicleDto } from './dto/filter-vehicle.dto';
import { Offer } from 'src/offers/entities/offer.entity';
import { OfferDetail } from 'src/offers_details/entities/offers_detail.entity';
import { OffersPromotion } from 'src/offers_promotion/entities/offers_promotion.entity';

@Injectable()
export class VehiclesService {
  constructor(
    @InjectModel(Vehicle)
    private VehicleModel: typeof Vehicle,
  ) {}
  create(createVehicleDto: CreateVehicleDto) {
    try {
      return this.VehicleModel.create(createVehicleDto, {
        include: [
          VehiclesDimension,
          VehiclesItem,
          VehiclesMotor,
          VehiclesGallery,
          {
            model: VehiclesStore,
            include: [VehiclesStoresContent],
          },
        ],
      });
    } catch (e) {
      return e;
    }
  }

  findAllVehicleOffers(filter: FilterVehicleDto) {
    try {
      const where = {};
      if (filter.name)
        Object.assign(where, {
          name: {
            [Op.substring]: filter.name,
          },
        });

      return this.VehicleModel.findAndCountAll({
        include: [
          {
            model: VehiclesCategory,
            attributes: ['name'],
          },
          {
            model: FilesImage,
            attributes: ['size65x65', 'size450x270', 'size450x300'],
          },
          {
            model: Offer,
            include: [
              {
                model: OfferDetail,
              },
              {
                model: OffersPromotion,
              },
            ],
          },
        ],
        where,
        offset: !!filter.page
          ? parseInt(filter.limit) * parseInt(filter.page)
          : 0,
        limit: parseInt(filter.limit) || 15,
        attributes: ['id', 'route', 'name', 'thumb', 'subtitle', 'status'],
      });
    } catch (e) {
      return e;
    }
  }

  findAllBests() {
    return this.VehicleModel.findAll({
      include: [
        {
          model: VehiclesMotor,
          attributes: ['motorization', 'gearshift'],
        },
        {
          model: FilesImage,
          attributes: ['size450x270', 'size450x300'],
        },
        {
          model: FilesImage,
          attributes: ['size450x270', 'size450x300'],
        },
        {
          model: OfferDetail,
          order: [['price', 'ASC']],
          attributes: ['period', 'mileage', 'price'],
          limit: 1,
          where: {
            status: true,
          },
        },
      ],
      attributes: ['route', 'name', 'thumb', 'subtitle'],
      limit: 50,
    });
  }

  findVehicleCategory(vehicleCategoryId: string, notIdVehicle: string) {
    return this.VehicleModel.findAll({
      where: {
        status: true,
        [Op.not]: [
          {
            id: notIdVehicle,
          },
        ],
        vehicleCategoryId: {
          [Op.or]: [vehicleCategoryId],
        },
      },
      include: [
        {
          model: VehiclesMotor,
          attributes: ['motorization'],
        },
        {
          model: FilesImage,
          attributes: ['size450x270', 'size450x300'],
        },
      ],
      attributes: ['route', 'name', 'thumb', 'subtitle'],
      limit: 10,
    });
  }

  findAllListRouter() {
    try {
      return this.VehicleModel.findAll({
        attributes: ['route'],
        where: {
          status: true,
        },
      });
    } catch (e) {
      return e;
    }
  }

  findAll(filter: FilterVehicleDto) {
    try {
      const where = {};
      if (filter.name)
        Object.assign(where, {
          name: {
            [Op.substring]: filter.name,
          },
        });

      return this.VehicleModel.findAndCountAll({
        include: [
          {
            model: VehiclesMotor,
            attributes: ['motorization'],
          },
          {
            model: VehiclesBrand,
            attributes: ['name'],
          },
          {
            model: VehiclesCategory,
            attributes: ['name'],
          },
          {
            model: FilesImage,
            attributes: ['size65x65', 'size450x270', 'size450x300'],
          },
        ],
        where,
        offset: !!filter.page
          ? parseInt(filter.limit) * parseInt(filter.page)
          : 0,
        limit: parseInt(filter.limit) || 15,
        attributes: ['id', 'route', 'name', 'thumb', 'subtitle', 'status'],
      });
    } catch (e) {
      return e;
    }
  }

  findOne(route: string) {
    try {
      return this.VehicleModel.findOne({
        attributes: [
          'id',
          'name',
          'vehicleCategoryId',
          'about',
          'route',
          'status',
          'thumb',
          'subtitle',
          'tags',
        ],
        include: [
          {
            model: VehiclesGallery,
            attributes: ['title', 'description', 'file'],
            include: [
              {
                model: FilesImage,
                attributes: ['size65x65', 'size450x270', 'size450x300'],
              },
            ],
          },
          {
            model: VehiclesStore,
            attributes: ['id', 'title', 'thumb'],
            include: [
              {
                model: FilesImage,
                attributes: ['size65x65', 'size450x270', 'size450x300'],
              },
              {
                model: VehiclesStoresContent,
                attributes: ['title', 'file'],
                include: [
                  {
                    model: FilesImage,
                    attributes: ['size65x65', 'size450x270', 'size450x300'],
                  },
                ],
              },
            ],
          },
          {
            model: VehiclesItem,
            include: [VehiclesOptionsIten],
          },
          {
            model: VehiclesDimension,
          },
          {
            model: VehiclesMotor,
          },
          {
            model: FilesImage,
            attributes: ['size65x65', 'size450x270', 'size450x300'],
          },
        ],
        where: {
          route: route,
        },
      });
    } catch (e) {
      return e;
    }
  }

  update(id: number, updateVehicleDto: UpdateVehicleDto) {
    return `This action updates a #${id} vehicle`;
  }

  remove(id: number) {
    return `This action removes a #${id} vehicle`;
  }
}
