//Dependencies
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

//Dtos
import { CreateUsersLevelDto } from './dto/create-users-level.dto';
import { UpdateUsersLevelDto } from './dto/update-users-level.dto';

//Entity
import { UsersLevels } from './entities/users-level.entity';

@Injectable()
export class UsersLevelsService {
  constructor(
    @InjectModel(UsersLevels)
    private usersLevels: typeof UsersLevels,
  ) {}

  create(createUsersLevelDto: CreateUsersLevelDto) {
    try {
      return this.usersLevels.create(createUsersLevelDto);
    } catch (e) {
      return e;
    }
  }

  findAll() {
    try {
      return this.usersLevels.findAll();
    } catch (e) {
      return e;
    }
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
