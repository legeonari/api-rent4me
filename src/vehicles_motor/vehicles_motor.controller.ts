//Dependencies
import { Controller } from '@nestjs/common';

//Services
import { VehiclesMotorService } from './vehicles_motor.service';

@Controller('vehicles-motor')
export class VehiclesMotorController {
  constructor(private readonly vehiclesMotorService: VehiclesMotorService) {}
}
