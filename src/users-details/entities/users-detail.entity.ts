//Dependencies
import {
  Model,
  Table,
  PrimaryKey,
  Column,
  DataType,
  Default,
  AllowNull,
  BelongsTo,
  CreatedAt,
  UpdatedAt,
  DeletedAt,
  DefaultScope,
} from 'sequelize-typescript';

//Models
import { Users } from 'src/users/entities/user.entity';

@Table({
  modelName: 'users_details',
})
@DefaultScope(() => ({
  attributes: [
    'id',
    'cpf',
    'rg',
    'gender',
    'docImage',
    'maritalStatus',
    'profession',
    'createdAt',
  ],
}))
export class UsersDetails extends Model<UsersDetails> {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column(DataType.UUID)
  id: string;

  @BelongsTo(() => Users, {
    foreignKey: 'userId',
    targetKey: 'id',
    as: 'user',
  })
  @AllowNull(false)
  @Column({
    type: DataType.UUID,
    comment: 'User ID',
  })
  userId: string;

  @AllowNull(true)
  @Column({
    type: DataType.STRING,
    comment: 'CPF user',
    unique: true,
  })
  cpf: string;

  @AllowNull(true)
  @Column({
    type: DataType.STRING,
    comment: 'RG user',
    unique: true,
  })
  rg: string;

  @AllowNull(true)
  @Column({
    type: DataType.ENUM,
    values: ['male', 'female', 'other'],
    comment: 'Gender person user',
  })
  gender: string;

  @AllowNull(true)
  @Column({
    type: DataType.STRING,
    comment: 'Doc user',
    unique: true,
  })
  docImage: string;

  @AllowNull(true)
  @Column({
    type: DataType.ENUM,
    values: [
      'notMarried',
      'married',
      'divorced',
      'separate',
      'widower',
      'other',
    ],
    comment: 'Status marital user',
  })
  maritalStatus: string;

  @AllowNull(true)
  @Column({
    type: DataType.STRING,
    comment: 'Profession user',
    unique: true,
  })
  profession: string;

  @CreatedAt
  @Column
  createdAt!: Date;

  @UpdatedAt
  @Column
  updatedAt!: Date;

  @DeletedAt
  deletedAt!: Date;
}
