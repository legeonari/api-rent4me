//Dependencies
import { Controller } from '@nestjs/common';

//Services
import { VehiclesDimensionsService } from './vehicles_dimensions.service';

@Controller('vehicles-dimensions')
export class VehiclesDimensionsController {
  constructor(
    private readonly vehiclesDimensionsService: VehiclesDimensionsService,
  ) {}
}
