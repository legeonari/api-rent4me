//Modules
import { SequelizeModule } from '@nestjs/sequelize';
import { Module } from '@nestjs/common';

//Services
import { VehiclesItemsService } from './vehicles_itens.service';

//Controllers
import { VehiclesItemsController } from './vehicles_itens.controller';

//Entity
import { VehiclesItem } from './entities/vehicles_item.entity';

@Module({
  imports: [SequelizeModule.forFeature([VehiclesItem])],
  controllers: [VehiclesItemsController],
  providers: [VehiclesItemsService],
})
export class VehiclesItemsModule {}
