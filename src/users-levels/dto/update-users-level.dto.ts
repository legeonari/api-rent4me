import { PartialType } from '@nestjs/mapped-types';
import { CreateUsersLevelDto } from './create-users-level.dto';

export class UpdateUsersLevelDto extends PartialType(CreateUsersLevelDto) {}
