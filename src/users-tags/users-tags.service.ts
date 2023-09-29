//Dependencies
import { Inject, Injectable, forwardRef } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

//Dto
import { IntegrationUsersStatusDto } from './dto/integration-users-tags.dto';

//Models
import { UsersTags } from './entities/users-tags.entity';
import { TagsService } from 'src/tags/tags.service';
import { UsersService } from 'src/users/users.service';
import { Op } from 'sequelize';

@Injectable()
export class UsersTagsService {
  constructor(
    @InjectModel(UsersTags)
    private userTagModel: typeof UsersTags,

    @Inject(forwardRef(() => TagsService))
    private readonly tagsService: TagsService,

    @Inject(forwardRef(() => UsersService))
    private readonly usersService: UsersService,
  ) {}

  async eventIntegration(integrationUsersStatus: IntegrationUsersStatusDto) {
    try {
      if (!integrationUsersStatus.user.Tags) return;

      const idsString = integrationUsersStatus.user.Tags.map(
        (tag) => tag.Id,
      ).join(',');

      if (!idsString.length) return;

      const tags = await this.tagsService.findById(idsString);
      const user = await this.usersService.findOneByIdContact(
        integrationUsersStatus.user.Id,
      );

      if (!tags) return;

      const idTags = tags.map((tag) => tag.id);
      if (Array.isArray(idTags)) {
        this.userTagModel.update(
          {
            status: false,
          },
          {
            where: {
              status: true,
              tagsId: {
                [Op.notIn]: idTags,
              },
              userId: user.id,
            },
          },
        );
      } else {
        console.error('idTags is not an array:', idTags);
      }

      const idsStringArray = idsString.split(',');
      console.log(idsStringArray);

      tags.map((tag) => {
        this.userTagModel.findOrCreate({
          where: {
            userId: user.id,
            tagsId: tag.id,
            status: true,
          },
          defaults: {
            userId: user.id,
            tagsId: tag.id,
            observation: 'Integração via API',
            status: true,
          },
        });
      });
    } catch (e) {
      console.log('ERROR eventIntegration', e);
      return e;
    }
  }
}
