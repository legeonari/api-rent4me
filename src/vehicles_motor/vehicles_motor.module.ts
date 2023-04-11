//Modules
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

//Services
import { VehiclesMotorService } from './vehicles_motor.service';

//Controller
import { VehiclesMotorController } from './vehicles_motor.controller';

//Entity
import { VehiclesMotor } from './entities/vehicles_motor.entity';

@Module({
  imports: [SequelizeModule.forFeature([VehiclesMotor])],
  controllers: [VehiclesMotorController],
  providers: [VehiclesMotorService],
})
export class VehiclesMotorModule {}
