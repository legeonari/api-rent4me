//Modules
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

//Services
import { VehiclesService } from './vehicles.service';

//Controllers
import { VehiclesController } from './vehicles.controller';

//Entity
import { Vehicle } from './entities/vehicle.entity';

@Module({
  imports: [SequelizeModule.forFeature([Vehicle])],
  controllers: [VehiclesController],
  providers: [VehiclesService],
})
export class VehiclesModule {}
