import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersContractsService } from './users-contracts.service';
import { CreateUsersContractDto } from './dto/create-users-contract.dto';
import { UpdateUsersContractDto } from './dto/update-users-contract.dto';

@Controller('users-contracts')
export class UsersContractsController {
  constructor(private readonly usersContractsService: UsersContractsService) {}

  @Post()
  create(@Body() createUsersContractDto: CreateUsersContractDto) {
    return this.usersContractsService.create(createUsersContractDto);
  }

  @Get()
  findAll() {
    return this.usersContractsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersContractsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUsersContractDto: UpdateUsersContractDto) {
    return this.usersContractsService.update(+id, updateUsersContractDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersContractsService.remove(+id);
  }
}
