//Modules
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

//Services
import { VehiclesDimensionsService } from './vehicles_dimensions.service';

//Controller
import { VehiclesDimensionsController } from './vehicles_dimensions.controller';

//Entity
import { VehiclesDimension } from './entities/vehicles_dimension.entity';

@Module({
  imports: [SequelizeModule.forFeature([VehiclesDimension])],
  controllers: [VehiclesDimensionsController],
  providers: [VehiclesDimensionsService],
})
export class VehiclesDimensionsModule {}
