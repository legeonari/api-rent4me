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

  findAllBests() {
    return this.VehicleModel.findAll({
      include: [
        {
          model: VehiclesMotor,
          attributes: ['motorization'],
        },
      ],
      attributes: ['route', 'name', 'thumb', 'subtitle'],
      limit: 50,
    });
  }

  findAll(vehicleCategoryId: string, notIdVehicle: string) {
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

  findOne(route: string) {
    try {
      return this.VehicleModel.findOne({
        attributes: [
          'id',
          'name',
          'vehicleCategoryId',
          'about',
          'route',
          'thumb',
          'subtitle',
          'tags',
        ],
        include: [
          {
            model: VehiclesGallery,
            attributes: ['title', 'description', 'file'],
          },
          {
            model: VehiclesStore,
            attributes: ['id', 'title', 'thumb'],
            include: [
              {
                model: VehiclesStoresContent,
                attributes: ['title', 'file'],
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
