//Modules
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

//Services
import { VehiclesOptionsItensService } from './vehicles_options_itens.service';

//Controllers
import { VehiclesOptionsItensController } from './vehicles_options_itens.controller';

//Entity
import { VehiclesOptionsIten } from './entities/vehicles_options_item.entity';

@Module({
  imports: [SequelizeModule.forFeature([VehiclesOptionsIten])],
  controllers: [VehiclesOptionsItensController],
  providers: [VehiclesOptionsItensService],
})
export class VehiclesOptionsItensModule {}
