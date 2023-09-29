//Modules
import { SequelizeModule } from '@nestjs/sequelize';
import { Module, forwardRef } from '@nestjs/common';

//Services
import { UsersTagsService } from './users-tags.service';

//Controller
import { UsersTagsController } from './users-tags.controller';

//Entity
import { UsersTags } from './entities/users-tags.entity';
import { TagsModule } from 'src/tags/tags.module';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [
    SequelizeModule.forFeature([UsersTags]),
    TagsModule,
    forwardRef(() => UsersModule),
  ],
  controllers: [UsersTagsController],
  providers: [UsersTagsService],
  exports: [UsersTagsService],
})
export class UsersTagsModule {}
