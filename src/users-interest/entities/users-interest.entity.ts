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
  AfterCreate,
} from 'sequelize-typescript';

//Models
import { Users } from 'src/users/entities/user.entity';
import { Vehicle } from 'src/vehicles/entities/vehicle.entity';

@Table({
  modelName: 'users_interest',
})
export class UsersInterest extends Model<UsersInterest> {
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

  @BelongsTo(() => Vehicle, {
    foreignKey: 'vehicleId',
    targetKey: 'id',
    as: 'vehicle',
  })
  @AllowNull(false)
  @Column({
    type: DataType.UUID,
    comment: 'Car ID',
  })
  vehicleId: string;

  @AllowNull(true)
  @Column({
    type: DataType.STRING,
    comment: 'Vehicle name',
  })
  name: string;

  @AllowNull(true)
  @Column({
    type: DataType.NUMBER,
    comment: '',
  })
  period: number;

  @AllowNull(true)
  @Column({
    type: DataType.STRING,
    comment: '',
  })
  mileage: string;

  @AllowNull(true)
  @Column({
    type: DataType.STRING,
    comment: '',
  })
  price: string;

  @AllowNull(false)
  @Column({
    type: DataType.ENUM,
    values: ['view', 'solicitation'],
    comment: 'Type interest',
  })
  type: string;

  @AllowNull(true)
  @Column({
    type: DataType.STRING,
    comment: 'State access',
  })
  state: string;

  @AllowNull(true)
  @Column({
    type: DataType.STRING,
    comment: 'City access',
  })
  city: string;

  @AllowNull(true)
  @Column({
    type: DataType.DATE,
    comment: 'Init view moment',
    defaultValue: new Date(),
  })
  startTimeView: Date;

  @AllowNull(true)
  @Column({
    type: DataType.DATE,
    comment: 'Finish view moment',
    defaultValue: new Date(),
  })
  finishTimeView: Date;

  @CreatedAt
  @Column
  createdAt!: Date;

  @UpdatedAt
  @Column
  updatedAt!: Date;

  @DeletedAt
  deletedAt!: Date;
}
