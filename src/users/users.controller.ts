//Dependencies
import {
  ApiBearerAuth,
  ApiBody,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';

//Services
import { UsersService } from './users.service';

//Dtos
import { CreateUserLeadDto } from './dto/create-user-lead.dto';
import { UpdateUserDto } from './dto/update-user.dto';

//Guards
import { Roles } from 'src/guards/roles.decorator';
import { JwtAuthGuard } from 'src/guards/jwt-auth.guard';
import { RoleGuard } from 'src/guards/roles.guards';
import { CreateUserDto } from './dto/create-user.dto';

@ApiTags('Users')
@ApiBearerAuth('Bearer')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/lead')
  @ApiOperation({
    summary: 'Create lead',
    description: 'Service Created Lead user',
  })
  @ApiBody({ type: CreateUserLeadDto })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  createLead(@Body() createUserLeadDto: CreateUserLeadDto) {
    return this.usersService.createLead(createUserLeadDto);
  }

  // @UseGuards(JwtAuthGuard, RoleGuard)
  // @Roles('admin')
  @Post()
  @ApiOperation({
    summary: 'Create users',
    description: 'Service Created users',
  })
  @ApiBody({ type: CreateUserDto })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @UseGuards(JwtAuthGuard, RoleGuard)
  @Roles('admin')
  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  // @UseGuards(JwtAuthGuard, RoleGuard)
  @Roles('admin')
  @Get('/leads')
  findAllLeads() {
    return this.usersService.findAllLeads();
  }

  @UseGuards(JwtAuthGuard, RoleGuard)
  @Roles('admin')
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @UseGuards(JwtAuthGuard, RoleGuard)
  @Roles('admin')
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @UseGuards(JwtAuthGuard, RoleGuard)
  @Roles('admin')
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
