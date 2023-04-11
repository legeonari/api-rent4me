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
import { Partner } from 'src/partners/entities/partner.entity';

//Models
import { Users } from 'src/users/entities/user.entity';

@Table({
  modelName: 'users_contracts',
})
@DefaultScope(() => ({
  attributes: [
    'clientId',
    'professionalId',
    'init',
    'end',
    'period',
    'mileage',
    'monthlyValue',
    'color',
    'billed',
    'status',
    'createdAt',
  ],
}))
export class UsersContract extends Model<UsersContract> {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column(DataType.UUID)
  id: string;

  @BelongsTo(() => Users, {
    foreignKey: 'clientId',
    targetKey: 'id',
    as: 'client',
  })
  @AllowNull(false)
  @Column({
    type: DataType.UUID,
    comment: 'User ID',
  })
  clientId: string;

  @BelongsTo(() => Users, {
    foreignKey: 'professionalId',
    targetKey: 'id',
    as: 'professional',
  })
  @AllowNull(false)
  @Column({
    type: DataType.UUID,
    comment: 'User ID',
  })
  professionalId: string;

  @BelongsTo(() => Partner, {
    foreignKey: 'partnerId',
    targetKey: 'id',
    as: 'partner',
  })
  @AllowNull(false)
  @Column({
    type: DataType.UUID,
    comment: 'Partner ID',
  })
  partnerId: string;

  @AllowNull(false)
  @Column({
    type: DataType.DATE,
    comment: 'Start day contract',
    defaultValue: new Date(),
  })
  init: Date;

  @AllowNull(false)
  @Column({
    type: DataType.DATE,
    comment: 'Finish day contract',
    defaultValue: new Date(),
  })
  end: Date;

  @AllowNull(false)
  @Column({
    type: DataType.INTEGER,
    comment: 'Period contract user',
  })
  period: number;

  @AllowNull(false)
  @Column({
    type: DataType.INTEGER,
    comment: 'Mileage month contract user',
  })
  mileage: number;

  @AllowNull(false)
  @Column({
    type: DataType.FLOAT,
    comment: 'Price month contract user',
  })
  monthlyValue: number;

  @AllowNull(false)
  @Column({
    type: DataType.STRING,
    comment: 'Color car',
  })
  color: string;

  @AllowNull(false)
  @Column({
    type: DataType.FLOAT,
    comment: 'Billed car',
  })
  billed: number;

  @AllowNull(false)
  @Column({
    type: DataType.BOOLEAN,
    comment: 'Status contract',
    defaultValue: false,
  })
  status: boolean;

  @CreatedAt
  @Column
  createdAt!: Date;

  @UpdatedAt
  @Column
  updatedAt!: Date;

  @DeletedAt
  deletedAt!: Date;
}
