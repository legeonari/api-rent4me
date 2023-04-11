//Modules
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { VehiclesModule } from 'src/vehicles/vehicles.module';

//Serives
import { VehiclesCategoriesService } from './vehicles_categories.service';

//Controlles
import { VehiclesCategoriesController } from './vehicles_categories.controller';

//Entity
import { VehiclesCategory } from './entities/vehicles_category.entity';

@Module({
  imports: [SequelizeModule.forFeature([VehiclesCategory]), VehiclesModule],
  controllers: [VehiclesCategoriesController],
  providers: [VehiclesCategoriesService],
})
export class VehiclesCategoriesModule {}
