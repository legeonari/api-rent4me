//Dependencies
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

//Dto
import { CreateTagDto } from './dto/create-tag.dto';

//Models
import { Tag } from './entities/tag.entity';

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
}
