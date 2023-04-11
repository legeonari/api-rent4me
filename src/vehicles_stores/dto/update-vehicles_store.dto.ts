import { PartialType } from '@nestjs/swagger';
import { CreateVehiclesStoreDto } from './create-vehicles_store.dto';

export class UpdateVehiclesStoreDto extends PartialType(CreateVehiclesStoreDto) {}
