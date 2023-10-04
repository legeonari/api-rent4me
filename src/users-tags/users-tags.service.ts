//Dependencies
import { Op } from 'sequelize';
import { Inject, Injectable, forwardRef } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import * as moment from 'moment';

//Dto
import { IntegrationUsersStatusDto } from './dto/integration-users-tags.dto';

//Services
import { UsersTags } from './entities/users-tags.entity';
import { TagsService } from 'src/tags/tags.service';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class UsersTagsService {
  findAll() {
    throw new Error('Method not implemented.');
  }
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
      let tagsFix = integrationUsersStatus.user.Tags;
      tagsFix = await this.updateStatus(true, integrationUsersStatus.user.Tags);

      const idsString = tagsFix.map((tag) => tag.Id).join(',');

      if (!idsString.length) return;

      const tags = await this.tagsService.findById(idsString);
      if (!tags) return;

      let user = await this.usersService.findOneByIdContact(
        integrationUsersStatus.user.Id,
      );

      if (!user) {
        //Add user if not exist
        user = await this.usersService.checkUserWebhookUmbler({
          name: integrationUsersStatus.user.Name,
          phone: integrationUsersStatus.user.PhoneNumber,
          idContactUtalk: integrationUsersStatus.user.Id,
          thumb: integrationUsersStatus.user.ProfilePictureUrl
            ? null
            : integrationUsersStatus.user.ProfilePictureUrl,
          origin: 'umbler',
        });
      }

      const idTags = tags.map((tag) => tag.id);

      await Promise.all([
        this.createOrUpdateUserTags(user.id, tags, integrationUsersStatus),
        this.updateUserTagsStatus(user.id, idTags),
      ]);
    } catch (e) {
      console.log('ERROR eventIntegration', e);
      return e;
    }
  }

  private async updateUserTagsStatus(userId: number, tagIds: number[]) {
    if (!Array.isArray(tagIds) || !tagIds.length) {
      console.error('tagIds is not an array or is empty:', tagIds);
      return;
    }

    await this.userTagModel.update(
      { status: false },
      {
        where: {
          status: true,
          tagsId: { [Op.notIn]: tagIds },
          userId: userId,
        },
      },
    );
  }

  private async createOrUpdateUserTags(
    userId: string,
    tags: [{ id: string }],
    contact: IntegrationUsersStatusDto,
  ) {
    try {
      const userTagsPromises = tags.map((tag) => {
        this.userTagModel.findOrCreate({
          where: {
            userId: userId,
            tagsId: tag.id,
            status: true,
          },
          defaults: {
            userId: userId,
            tagsId: tag.id,
            observation: 'Integração via API',
            status: true,
            createdAt: !!contact.closedAtUTC
              ? moment(contact.closedAtUTC).toDate()
              : null,
          },
        });
      });
      await Promise.all(userTagsPromises);
    } catch (e) {
      console.error('ERROR createOrUpdateUserTags', e);
      throw e;
    }
  }

  private async updateStatus(open, tags) {
    const inProgressStatus = {
      name: 'Em atendimento',
      id: 'ZRc21WtSzyaJlsU',
    };

    const closedStatus = {
      name: 'Atendimento encerrado',
      id: 'ZRrO2a9ocCUjYgdI',
    };

    if (open) {
      tags = tags.filter((status) => status.id !== closedStatus.id);
      tags.push(inProgressStatus);
    } else {
      tags = tags.filter((status) => status.id !== inProgressStatus.id);
      tags.push(closedStatus);
    }

    return tags;
  }
}
