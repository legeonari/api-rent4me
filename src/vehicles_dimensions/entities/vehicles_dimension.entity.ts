//Dependencies
import {
  Model,
  Table,
  PrimaryKey,
  Column,
  DataType,
  Default,
  AllowNull,
  DefaultScope,
  BelongsTo,
  CreatedAt,
  UpdatedAt,
  DeletedAt,
} from 'sequelize-typescript';

//Entity
import { Vehicle } from 'src/vehicles/entities/vehicle.entity';

@Table({
  modelName: 'vehicles_dimension',
})
@DefaultScope(() => ({
  attributes: [
    'height',
    'width',
    'length',
    'weight',
    'tank',
    'axleDistance',
    'trunk',
    'occupants',
  ],
}))
export class VehiclesDimension extends Model<VehiclesDimension> {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column(DataType.UUID)
  id: string;

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
    type: DataType.FLOAT,
    comment: 'Height',
  })
  height: string;

  @AllowNull(true)
  @Column({
    type: DataType.FLOAT,
    comment: 'Width',
  })
  width: number;

  @AllowNull(true)
  @Column({
    type: DataType.FLOAT,
    comment: 'Length',
  })
  length: number;

  @AllowNull(true)
  @Column({
    type: DataType.FLOAT,
    comment: 'Height',
  })
  weight: number;

  @AllowNull(true)
  @Column({
    type: DataType.FLOAT,
    comment: 'Tank',
  })
  tank: number;

  @AllowNull(true)
  @Column({
    type: DataType.FLOAT,
    comment: 'Axle distance',
  })
  axleDistance: number;

  @AllowNull(true)
  @Column({
    type: DataType.FLOAT,
    comment: 'Trunk car',
  })
  trunk: number;

  @AllowNull(true)
  @Column({
    type: DataType.INTEGER,
    comment: 'Capacity occupants',
  })
  occupants: number;

  @CreatedAt
  @Column
  createdAt!: Date;

  @UpdatedAt
  @Column
  updatedAt!: Date;

  @DeletedAt
  deletedAt!: Date;
}
