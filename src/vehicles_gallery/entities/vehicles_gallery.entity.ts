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
} from 'sequelize-typescript';

//Entity
import { Vehicle } from 'src/vehicles/entities/vehicle.entity';

@Table({
  modelName: 'vehicles_gallery',
})
export class VehiclesGallery extends Model<VehiclesGallery> {
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
    type: DataType.STRING,
    comment: 'Title',
  })
  title: string;

  @AllowNull(true)
  @Column({
    type: DataType.TEXT,
    comment: 'Description',
  })
  description: string;

  @AllowNull(false)
  @Column({
    type: DataType.STRING,
    comment: 'Image',
  })
  file: string;

  @AllowNull(false)
  @Column({
    type: DataType.BOOLEAN,
    comment: 'status',
    defaultValue: true,
  })
  status: boolean;
}
