//Modules
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { VehiclesModule } from 'src/vehicles/vehicles.module';

//Service
import { VehiclesBrandService } from './vehicles_brand.service';

//Controller
import { VehiclesBrandController } from './vehicles_brand.controller';

//Entity
import { VehiclesBrand } from './entities/vehicles_brand.entity';

@Module({
  imports: [SequelizeModule.forFeature([VehiclesBrand]), VehiclesModule],
  controllers: [VehiclesBrandController],
  providers: [VehiclesBrandService],
})
export class VehiclesBrandModule {}
