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
    if (!!instance.phone) {
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
      ? `https://api.dicebear.com/6.x/adventurer-neutral/svg?seed=${instance.name}&backgroundColor=ecad80,f2d3b1,9e5622,763900&eyebrows=variant02,variant04,variant06,variant08,variant09,variant10,variant11,variant12,variant13,variant14,variant15,variant05,variant03&eyes=variant04,variant07,variant09,variant10,variant11,variant12,variant13,variant14,variant17,variant18,variant19,variant20,variant21,variant22,variant23,variant24,variant25,variant26,variant03,variant02,variant06&mouth=variant01,variant19,variant20,variant21,variant22,variant23,variant24,variant25,variant26,variant27,variant28,variant29,variant30,variant12`
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

  @CreatedAt
  @Column
  createdAt!: Date;

  @UpdatedAt
  @Column
  updatedAt!: Date;

  @DeletedAt
  deletedAt!: Date;
}
