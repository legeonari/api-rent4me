import { PartialType } from '@nestjs/swagger';
import { CreateVehiclesStoresContentDto } from './create-vehicles_stores_content.dto';

export class UpdateVehiclesStoresContentDto extends PartialType(CreateVehiclesStoresContentDto) {}
