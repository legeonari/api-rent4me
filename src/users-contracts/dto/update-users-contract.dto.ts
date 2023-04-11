import { PartialType } from '@nestjs/swagger';
import { CreateUsersContractDto } from './create-users-contract.dto';

export class UpdateUsersContractDto extends PartialType(CreateUsersContractDto) {}
