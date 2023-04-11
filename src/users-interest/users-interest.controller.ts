import { Controller } from '@nestjs/common';
import { UsersInterestService } from './users-interest.service';

@Controller('users-interest')
export class UsersInterestController {
  constructor(private readonly usersInterestService: UsersInterestService) {}
}
