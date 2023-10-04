//Dependencies
import * as bcrypt from 'bcrypt';

import {
  Model,
  Table,
  PrimaryKey,
  Column,
  DataType,
  Default,
  AllowNull,
  BeforeCreate,
  BelongsTo,
  CreatedAt,
  UpdatedAt,
  DeletedAt,
  BeforeUpdate,
  HasMany,
  DefaultScope,
} from 'sequelize-typescript';
import { UsersContract } from 'src/users-contracts/entities/users-contract.entity';
import { UsersDetails } from 'src/users-details/entities/users-detail.entity';
import { UsersInterest } from 'src/users-interest/entities/users-interest.entity';

//Entitys
import { UsersLevels } from 'src/users-levels/entities/users-level.entity';
import { UsersTags } from 'src/users-tags/entities/users-tags.entity';

@Table({
  modelName: 'users',
})
@DefaultScope(() => ({
  attributes: { exclude: ['password'] },
}))
export class Users extends Model<Users> {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column(DataType.UUID)
  id: string;

  @BelongsTo(() => UsersLevels, {
    foreignKey: 'userLevelId',
    targetKey: 'id',
    as: 'userLevel',
  })
  @AllowNull(false)
  @Column({
    type: DataType.UUID,
    comment: 'User Level ID',
  })
  userLevelId: string;

  @AllowNull(false)
  @Column({
    type: DataType.STRING,
    comment: 'Name',
  })
  name: string;

  @AllowNull(true)
  @Column({
    type: DataType.STRING,
    comment: 'E-mail user',
  })
  email: string;

  @AllowNull(true)
  @Column({
    type: DataType.STRING,
    comment: 'ID Contact UTALK',
  })
  idContactUtalk: string;

  @BeforeUpdate
  @BeforeCreate
  static normalizeNumber(instance: Users) {
    if (instance.phone && !instance.phone.startsWith('+55')) {
      instance.phone = `+55${instance.phone
        .replace(/[^\w\s]/gi, '')
        .replace(/\s/g, '')
        .trim()}`;
    }
  }
  @AllowNull(true)
  @Column({
    type: DataType.STRING,
    comment: 'Number phone user',
    unique: true,
  })
  phone: string;

  @AllowNull(true)
  @Column({
    type: DataType.DATE,
    comment: 'Birthday',
  })
  birthday: Date;

  @AllowNull(true)
  @Column({
    type: DataType.ENUM,
    values: ['site', 'umbler', 'other'],
    defaultValue: 'site',
    comment: 'Font user',
  })
  origin: string;

  @BeforeCreate
  @BeforeUpdate
  static hashPassword(instance: Users) {
    if (!!instance.password) {
      instance.password = bcrypt.hashSync(
        instance.password,
        Number(process.env.HASH_SALT),
      );
    }
  }
  @Column({
    type: DataType.TEXT,
    comment: 'Password',
  })
  password: string;

  @BeforeCreate
  static addImageIcon(instance: Users) {
    instance.thumb = !instance.thumb
      ? `https://api.dicebear.com/7.x/initials/svg?seed=${instance.name}&backgroundColor=5e35b1,8e24aa&backgroundType=gradientLinear&randomizeIds=true&fontFamily=Verdana&fontSize=46&chars=1&fontWeight=500`
      : instance.thumb;
  }
  @AllowNull(true)
  @Column({
    type: DataType.STRING,
    comment: 'Photo user',
  })
  thumb: string;

  @AllowNull(true)
  @Column({
    type: DataType.BOOLEAN,
    comment: 'Status account',
    defaultValue: true,
  })
  status: boolean;

  @AllowNull(true)
  @Column({
    type: DataType.BOOLEAN,
    comment: 'Block user',
    defaultValue: false,
  })
  blackList: boolean;

  //Foreign
  @HasMany(() => UsersDetails, 'userId')
  details;

  @HasMany(() => UsersInterest, 'userId')
  interest;

  @HasMany(() => UsersContract, 'userId')
  contract;

  @HasMany(() => UsersTags, 'userId')
  tags;

  @CreatedAt
  @Column
  createdAt!: Date;

  @UpdatedAt
  @Column
  updatedAt!: Date;

  @DeletedAt
  deletedAt!: Date;
}
