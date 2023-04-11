//Module
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

//Service
import { UsersContractsService } from './users-contracts.service';

//Controller
import { UsersContractsController } from './users-contracts.controller';

//Entity
import { UsersContract } from './entities/users-contract.entity';

@Module({
  imports: [SequelizeModule.forFeature([UsersContract])],
  controllers: [UsersContractsController],
  providers: [UsersContractsService],
})
export class UsersContractsModule {}
