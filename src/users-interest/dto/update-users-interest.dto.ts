import { PartialType } from '@nestjs/swagger';
import { CreateUsersInterestDto } from './create-users-interest.dto';

export class UpdateUsersInterestDto extends PartialType(CreateUsersInterestDto) {}
