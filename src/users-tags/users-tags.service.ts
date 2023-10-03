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

      const idsString = integrationUsersStatus.user.Tags.map(
        (tag) => tag.Id,
      ).join(',');

      console.log('idsString', idsString);

      if (!idsString.length) return;

      const tags = await this.tagsService.findById(idsString);
      if (!tags) return;

      let user = await this.usersService.findOneByIdContact(
        integrationUsersStatus.user.Id,
      );

      if (!user) {
        //Add user if not exist
        user = this.usersService.checkUserWebhookUmbler({
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
        console.log('\n\n\n', {
          userId: userId,
          tagsId: tag.id,
          observation: 'Integração via API',
          status: true,
          updatedAt: moment(contact.user.LastActiveUTC).toDate(),
        });
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
            updatedAt: moment(contact.user.LastActiveUTC).toDate(),
          },
        });
      });
      await Promise.all(userTagsPromises);
    } catch (e) {
      console.error('ERROR createOrUpdateUserTags', e);
      throw e;
    }
  }
}
