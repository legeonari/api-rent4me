import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UsersDetailssService } from './users-details.service';
import { CreateUsersDetailsDto } from './dto/create-users-detail.dto';
import { UpdateUsersDetailsDto } from './dto/update-users-detail.dto';

@Controller('users-details')
export class UsersDetailssController {
  constructor(private readonly UsersDetailssService: UsersDetailssService) {}

  @Post()
  create(@Body() createUsersDetailsDto: CreateUsersDetailsDto) {
    return this.UsersDetailssService.create(createUsersDetailsDto);
  }

  @Get()
  findAll() {
    return this.UsersDetailssService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.UsersDetailssService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUsersDetailsDto: UpdateUsersDetailsDto) {
    return this.UsersDetailssService.update(+id, updateUsersDetailsDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.UsersDetailssService.remove(+id);
  }
}
