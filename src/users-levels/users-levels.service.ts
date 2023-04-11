import { Injectable } from '@nestjs/common';
import { CreateUsersLevelDto } from './dto/create-users-level.dto';
import { UpdateUsersLevelDto } from './dto/update-users-level.dto';

@Injectable()
export class UsersLevelsService {
  create(createUsersLevelDto: CreateUsersLevelDto) {
    return 'This action adds a new usersLevel';
  }

  findAll() {
    return `This action returns all usersLevels`;
  }

  findOne(id: number) {
    return `This action returns a #${id} usersLevel`;
  }

  update(id: number, updateUsersLevelDto: UpdateUsersLevelDto) {
    return `This action updates a #${id} usersLevel`;
  }

  remove(id: number) {
    return `This action removes a #${id} usersLevel`;
  }
}
