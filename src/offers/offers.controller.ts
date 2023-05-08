//Dependencies
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

//Services
import { OffersService } from './offers.service';

//Dto
import { CreateOfferDto } from './dto/create-offer.dto';

@ApiTags('Offers')
@ApiBearerAuth('Bearer')
@Controller('offers')
export class OffersController {
  constructor(private readonly offersService: OffersService) {}

  @Post()
  create(@Body() createOfferDto: CreateOfferDto) {
    return this.offersService.create(createOfferDto);
  }

  @Get()
  @ApiOperation({
    summary: 'List offers',
    description: 'List all offers',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  findAll() {
    return this.offersService.findAll();
  }

  @Get('/vehicle/:partnerId')
  @ApiOperation({
    summary: 'List offers best by vehicle',
    description: 'Service Created Lead user',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  findAllPartnerId(@Param('partnerId') partnerId: string) {
    return this.offersService.findAllVehicle(partnerId);
  }
}
