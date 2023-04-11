//Modules
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersContractsModule } from 'src/users-contracts/users-contracts.module';

//Services
import { PartnersService } from './partners.service';

//Controller
import { PartnersController } from './partners.controller';

//Entity
import { Partner } from './entities/partner.entity';

@Module({
  imports: [SequelizeModule.forFeature([Partner]), UsersContractsModule],
  controllers: [PartnersController],
  providers: [PartnersService],
})
export class PartnersModule {}
