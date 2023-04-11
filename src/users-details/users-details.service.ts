import { Injectable } from '@nestjs/common';
import { CreateUsersDetailsDto } from './dto/create-users-detail.dto';
import { UpdateUsersDetailsDto } from './dto/update-users-detail.dto';

@Injectable()
export class UsersDetailssService {
  create(createUsersDetailsDto: CreateUsersDetailsDto) {
    return 'This action adds a new UsersDetails';
  }

  findAll() {
    return `This action returns all UsersDetailss`;
  }

  findOne(id: number) {
    return `This action returns a #${id} UsersDetails`;
  }

  update(id: number, updateUsersDetailsDto: UpdateUsersDetailsDto) {
    return `This action updates a #${id} UsersDetails`;
  }

  remove(id: number) {
    return `This action removes a #${id} UsersDetails`;
  }
}
