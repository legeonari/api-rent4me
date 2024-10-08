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
  HasMany,
} from 'sequelize-typescript';
import { FilesImage } from 'src/files_images/entities/files_image.entity';

//Entity
import { Vehicle } from 'src/vehicles/entities/vehicle.entity';
import { VehiclesStoresContent } from 'src/vehicles_stores_contents/entities/vehicles_stores_content.entity';

@Table({
  modelName: 'vehicles_stores',
})
@DefaultScope(() => ({
  attributes: ['id', 'vehicleId', 'title', 'thumb', 'status'],
}))
export class VehiclesStore extends Model<VehiclesStore> {
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

  @AllowNull(false)
  @Column({
    type: DataType.STRING,
    comment: 'Title',
  })
  title: string;

  @BelongsTo(() => FilesImage, {
    foreignKey: 'thumb',
    targetKey: 'id',
    as: 'image',
  })
  @AllowNull(false)
  @Column({
    type: DataType.UUID,
    comment: 'thumb',
  })
  thumb: string;

  @AllowNull(false)
  @Column({
    type: DataType.BOOLEAN,
    comment: 'status',
    defaultValue: true,
  })
  status: boolean;

  //Foreign
  @HasMany(() => VehiclesStoresContent, 'vehicleStoresId')
  contents;

  @CreatedAt
  @Column
  createdAt!: Date;

  @UpdatedAt
  @Column
  updatedAt!: Date;

  @DeletedAt
  deletedAt!: Date;
}
