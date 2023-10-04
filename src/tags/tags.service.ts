//Dependencies
import * as moment from 'moment';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

//Dto
import { CreateTagDto } from './dto/create-tag.dto';

//Models
import { Tag } from './entities/tag.entity';
import { UsersTags } from 'src/users-tags/entities/users-tags.entity';
import { Users } from 'src/users/entities/user.entity';
import { Op } from 'sequelize';

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
      // Obtém o primeiro e o último dia do mês atual
      const startOfMonth = moment().startOf('month').toDate();
      const endOfMonth = moment().endOf('month').toDate();

      return this.TagsModel.findAll({
        where: {
          type: 'status',
        },
        attributes: ['tag', 'id', 'color'],
        include: [
          {
            model: UsersTags,
            attributes: ['userId'],
            where: {
              status: true,
              createdAt: {
                [Op.between]: [startOfMonth, endOfMonth],
              },
            },
            duplicating: false,
            include: [
              {
                model: Users,
                attributes: ['name', 'thumb', 'id', 'createdAt', 'origin'],
                order: [['createdAt', 'ASC']],
              },
            ],
          },
        ],
        order: [['order', 'ASC']],
      });
    } catch (e) {
      console.log('ERROR eventIntegration', e);
      return e;
    }
  }
}
