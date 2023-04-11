import { Controller, Get, Param } from '@nestjs/common';
import { UsersLevelsService } from './users-levels.service';

@Controller('users-levels')
export class UsersLevelsController {
  constructor(private readonly usersLevelsService: UsersLevelsService) {}

  @Get()
  findAll() {
    return this.usersLevelsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersLevelsService.findOne(+id);
  }
}
