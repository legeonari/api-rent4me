import { PartialType } from '@nestjs/swagger';
import { CreateOffersDetailDto } from './create-offers_detail.dto';

export class UpdateOffersDetailDto extends PartialType(CreateOffersDetailDto) {}
