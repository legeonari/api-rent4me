//Dependencies
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiBody,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

//Services
import { PartnersService } from './partners.service';

//Dto
import { CreatePartnerDto } from './dto/create-partner.dto';
import { UpdatePartnerDto } from './dto/update-partner.dto';

@ApiTags('Partner')
@ApiBearerAuth('Bearer')
@Controller('partners')
export class PartnersController {
  constructor(private readonly partnersService: PartnersService) {}

  @Post()
  @ApiOperation({
    summary: 'List Partner',
    description: 'List all partner',
  })
  @ApiBody({ type: CreatePartnerDto })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  create(@Body() createPartnerDto: CreatePartnerDto) {
    return this.partnersService.create(createPartnerDto);
  }

  @Get()
  @ApiOperation({
    summary: 'List Partner',
    description: 'List all partner',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  findAll() {
    return this.partnersService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.partnersService.findOne(+id);
  // }
}
