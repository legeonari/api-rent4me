//Dependencies
import {
  ApiBearerAuth,
  ApiBody,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { Controller, Get, Post, Body, Param, UseGuards } from '@nestjs/common';

//Services
import { UsersLevelsService } from './users-levels.service';

//Dtos
import { CreateUsersLevelDto } from './dto/create-users-level.dto';

//Guards
import { Roles } from 'src/guards/roles.decorator';
import { JwtAuthGuard } from 'src/guards/jwt-auth.guard';
import { RoleGuard } from 'src/guards/roles.guards';

@ApiTags('Users Levels')
@ApiBearerAuth('Bearer')
@Controller('users-levels')
export class UsersLevelsController {
  constructor(private readonly usersLevelsService: UsersLevelsService) {}

  @UseGuards(JwtAuthGuard, RoleGuard)
  @Roles('admin')
  @Post()
  @ApiOperation({
    summary: 'Create level',
    description: 'Service Created user level',
  })
  @ApiBody({ type: CreateUsersLevelDto })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  created(@Body() createUsersLevelDto: CreateUsersLevelDto) {
    return this.usersLevelsService.create(createUsersLevelDto);
  }

  @Get()
  findAll() {
    return this.usersLevelsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersLevelsService.findOne(+id);
  }
}
