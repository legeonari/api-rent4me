//Dependencies
import { Controller, Get, Param } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

//Services
import { OffersDetailsService } from './offers_details.service';

@ApiTags('Offers')
@ApiBearerAuth('Bearer')
@Controller('offers-details')
export class OffersDetailsController {
  constructor(private readonly offersDetailsService: OffersDetailsService) {}

  @Get('/vehicle/:vehicleId')
  @ApiOperation({
    summary: 'List offers best by vehicle',
    description: 'Service Created Lead user',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  findAll(@Param('vehicleId') vehicleId: string) {
    return this.offersDetailsService.findAllByVehicle(vehicleId);
  }
}
