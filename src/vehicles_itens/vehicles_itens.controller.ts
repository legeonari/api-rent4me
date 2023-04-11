//Dependencies
import { Controller } from '@nestjs/common';

//Services
import { VehiclesItemsService } from './vehicles_itens.service';

@Controller('vehicles-itens')
export class VehiclesItemsController {
  constructor(private readonly VehiclesItemsService: VehiclesItemsService) {}
}
