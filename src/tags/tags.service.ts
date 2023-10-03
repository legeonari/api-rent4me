//Dependencies
import { Op, Sequelize } from 'sequelize';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

//Dto
import { CreateTagDto } from './dto/create-tag.dto';

//Models
import { Tag } from './entities/tag.entity';
import { UsersTags } from 'src/users-tags/entities/users-tags.entity';
import moment from 'moment';

@Injectable()
export class TagsService {
  constructor(
    @InjectModel(Tag)
    private TagsModel: typeof Tag,
  ) {}

  create(createTagDto: [CreateTagDto]) {
    try {
      return this.TagsModel.bulkCreate(createTagDto);
    } catch (e) {
      console.log('Error create Tags', e);
      return e;
    }
  }

  findById(params: string) {
    try {
      const paramsToArry = params.split(',');
      return this.TagsModel.findAll({
        where: {
          idTagExternal: paramsToArry,
        },
      });
    } catch (e) {
      console.log('Error find', e);
      return e;
    }
  }

  async getDashUsers() {
    try {
      return this.TagsModel.findAll({
        where: {
          type: 'status',
        },
        attributes: ['tag', 'id'],
        include: [
          {
            model: UsersTags,
            as: 'users',
            attributes: [
              [Sequelize.fn('COUNT', Sequelize.col('users.id')), 'totalUsers'],
            ],
            where: {
              status: true,
            },
            duplicating: false,
          },
        ],
        group: ['Tags.id'],
      });
    } catch (e) {
      console.log('ERROR eventIntegration', e);
      return e;
    }
  }
}
