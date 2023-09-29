//Modules
import { SequelizeModule } from '@nestjs/sequelize';
import { Module } from '@nestjs/common';

//Serives
import { TagsService } from './tags.service';

//Controller
import { TagsController } from './tags.controller';

//Entity
import { Tag } from './entities/tag.entity';

@Module({
  imports: [SequelizeModule.forFeature([Tag])],
  controllers: [TagsController],
  providers: [TagsService],
  exports: [TagsService],
})
export class TagsModule {}
