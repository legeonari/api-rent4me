//Dependencie
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

//Service
import { UsersLevelsService } from './users-levels.service';

//Controller
import { UsersLevelsController } from './users-levels.controller';

//Model
import { UsersLevels } from './entities/users-level.entity';

@Module({
  imports: [SequelizeModule.forFeature([UsersLevels])],
  controllers: [UsersLevelsController],
  providers: [UsersLevelsService],
})
export class UsersLevelsModule {}
