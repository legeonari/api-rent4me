//Dependencies
import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

//Dto
import { LoginUserDto } from 'src/auth/dto/auth.dto';
import { UsersInterest } from 'src/users-interest/entities/users-interest.entity';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserLeadDto } from './dto/create-user-lead.dto';
import { EventEmitter2 } from '@nestjs/event-emitter';

//Entity
import { Vehicle } from 'src/vehicles/entities/vehicle.entity';
import { Users } from './entities/user.entity';

//Services
import { UmblerTalkWhatsappService } from 'src/umbler_talk_whatsapp/umbler_talk_whatsapp.service';
import { UsersSentMessagesWhatsappService } from 'src/users-sent-messages-whatsapp/users-sent-messages-whatsapp.service';
import { UsersInterestService } from 'src/users-interest/users-interest.service';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(Users)
    private UsersModel: typeof Users,

    @Inject(forwardRef(() => UmblerTalkWhatsappService))
    private readonly umblerTalkWhatsappService: UmblerTalkWhatsappService,

    @Inject(forwardRef(() => UsersSentMessagesWhatsappService))
    private readonly usersSentMessagesWhatsappService: UsersSentMessagesWhatsappService,

    @Inject(forwardRef(() => UsersInterestService))
    private readonly usersInterestService: UsersInterestService,

    private eventEmitter: EventEmitter2,
  ) {}

  async createLead(createUserLeadDto: CreateUserLeadDto) {
    try {
      let user;

      user = await this.UsersModel.findOne({
        where: {
          phone: `+55${createUserLeadDto.phone
            .replace(/[^\w\s]/gi, '')
            .replace(/\s/g, '')
            .trim()}`,
        },
      });

      if (!user) {
        user = await this.UsersModel.create(
          {
            ...createUserLeadDto,
            userLevelId: process.env.USER_ID_LEAD,
          },
          {
            include: [UsersInterest],
          },
        );
      } else {
        const interest = createUserLeadDto.interest.map((item) => ({
          ...item,
          userId: user.id,
        }));
        this.usersInterestService.create(interest);
      }

      //Create contact and send message
      const utalkUser = await this.umblerTalkWhatsappService.createContact(
        user,
      );

      // Update ID Utalk in User
      utalkUser &&
        this.UsersModel.update(
          {
            idContactUtalk: utalkUser.contact.id,
          },
          {
            where: {
              id: user.id,
            },
          },
        );

      const vehicle = createUserLeadDto.interest.filter(
        (offer) => offer.type == 'solicitation',
      );

      await this.usersSentMessagesWhatsappService.create({
        userId: user.id,
        idContactUtalk: utalkUser.contact.id,
        message: `Olá, ${
          user.name.split(' ') ? user.name.split(' ')[0] : user.name
        } 👋!\r\n\r\nVi que você demonstrou interesse no ${
          vehicle[0].name
        } em nosso site. É um excelente carro e tenho certeza de que irá adorá-lo.\r\n\r\nGostaria de lembrá-lo de que, com o carro por assinatura, você terá algumas vantagens exclusivas, como o IPVA pago, seguro incluso e zero risco de depreciação do seu bem. 🥰\r\n\r\nPara darmos continuidade ao processo, basta me informar se prefere que eu ligue para você agora mesmo ou se prefere agendar um horário mais conveniente. Também podemos seguir conversando via Whatsapp.`,
        note: `Usuário demonstrou interesse ${vehicle[0].name}. \nPeriodo: ${vehicle[0].period} meses \nKm's ${vehicle[0].mileage}km`,
        template: 'ZCGc4wYjTYYCd8uC',
      });

      this.eventEmitter.emit('uTalk.created', {
        params: [
          `${user.name.split(' ') ? user.name.split(' ')[0] : user.name}`,
          vehicle[0].name,
        ],
      });

      return user;
    } catch (e) {
      console.log(e);
    }
  }

  async create(createUserDto: CreateUserDto) {
    try {
      const user = await this.UsersModel.create(createUserDto);

      //Create contact and send message
      this.umblerTalkWhatsappService.createContact(user);

      return user;
    } catch (e) {
      console.log(e);
    }
  }

  async auth(user: LoginUserDto) {
    try {
      return await this.UsersModel.findOne({
        where: {
          email: user.email,
          userLevelId: process.env.USER_ID_ADMIN,
        },
        attributes: ['id', 'name', 'thumb', 'userLevelId', 'password'],
      });
    } catch (e) {
      return null;
    }
  }

  async findAllLeads() {
    try {
      return await this.UsersModel.findAll({
        where: {
          userLevelId: process.env.USER_ID_LEAD,
        },
        include: [
          {
            model: UsersInterest,
            as: 'interest',
            include: [
              {
                model: Vehicle,
                attributes: ['name', 'thumb'],
              },
            ],
          },
        ],
        order: [['createdAt', 'DESC']],
      });
    } catch (e) {
      console.log(e);
      return [];
    }
  }

  async findAll() {
    try {
      return await this.UsersModel.findAll();
    } catch (e) {
      return [];
    }
  }

  async findOne(id: string) {
    try {
      return await this.UsersModel.findOne({
        where: {
          id: id,
        },
      });
    } catch (e) {
      return [];
    }
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
