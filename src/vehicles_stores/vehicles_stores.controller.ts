import { Controller } from '@nestjs/common';
import { VehiclesStoresService } from './vehicles_stores.service';

@Controller('vehicles-stores')
export class VehiclesStoresController {
  constructor(private readonly vehiclesStoresService: VehiclesStoresService) {}
}
