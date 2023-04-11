//Modules
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

//Services
import { VehiclesStoresContentsService } from './vehicles_stores_contents.service';

//Controllers
import { VehiclesStoresContentsController } from './vehicles_stores_contents.controller';

//Entity
import { VehiclesStoresContent } from './entities/vehicles_stores_content.entity';

@Module({
  imports: [SequelizeModule.forFeature([VehiclesStoresContent])],
  controllers: [VehiclesStoresContentsController],
  providers: [VehiclesStoresContentsService],
})
export class VehiclesStoresContentsModule {}
