//Modules
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

//Services
import { VehiclesStoresService } from './vehicles_stores.service';

//Controlles
import { VehiclesStoresController } from './vehicles_stores.controller';

//Entity
import { VehiclesStore } from './entities/vehicles_store.entity';

@Module({
  imports: [SequelizeModule.forFeature([VehiclesStore])],
  controllers: [VehiclesStoresController],
  providers: [VehiclesStoresService],
})
export class VehiclesStoresModule {}
