//Dependencies
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { Controller, Get, Param } from '@nestjs/common';

//Services
import { OffersService } from './offers.service';

@ApiTags('Offers')
@ApiBearerAuth('Bearer')
@Controller('offers')
export class OffersController {
  constructor(private readonly offersService: OffersService) {}

  // @Post()
  // create(@Body() createOfferDto: CreateOfferDto) {
  //   return this.offersService.create(createOfferDto);
  // }

  @Get('/vehicle/:partnerId')
  @ApiOperation({
    summary: 'List offers best by vehicle',
    description: 'Service Created Lead user',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  findAll(@Param('partnerId') partnerId: string) {
    return this.offersService.findAllVehicle(partnerId);
  }
}
