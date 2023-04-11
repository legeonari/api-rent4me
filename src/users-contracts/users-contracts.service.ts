import { Injectable } from '@nestjs/common';
import { CreateUsersContractDto } from './dto/create-users-contract.dto';
import { UpdateUsersContractDto } from './dto/update-users-contract.dto';

@Injectable()
export class UsersContractsService {
  create(createUsersContractDto: CreateUsersContractDto) {
    return 'This action adds a new usersContract';
  }

  findAll() {
    return `This action returns all usersContracts`;
  }

  findOne(id: number) {
    return `This action returns a #${id} usersContract`;
  }

  update(id: number, updateUsersContractDto: UpdateUsersContractDto) {
    return `This action updates a #${id} usersContract`;
  }

  remove(id: number) {
    return `This action removes a #${id} usersContract`;
  }
}
