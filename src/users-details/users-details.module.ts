//Modules
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

//Services
import { UsersDetailssService } from './users-details.service';

//Controller
import { UsersDetailssController } from './users-details.controller';

//Enity
import { UsersDetails } from './entities/users-detail.entity';

@Module({
  imports: [SequelizeModule.forFeature([UsersDetails])],
  controllers: [UsersDetailssController],
  providers: [UsersDetailssService],
  exports: [UsersDetailssService],
})
export class UsersDetailssModule {}
