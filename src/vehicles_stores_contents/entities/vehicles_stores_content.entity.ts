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
import { VehiclesStore } from 'src/vehicles_stores/entities/vehicles_store.entity';

@Table({
  modelName: 'vehicles_stores_contents',
})
@DefaultScope(() => ({
  attributes: ['vehicleStoresId', 'title', 'description', 'file', 'status'],
}))
export class VehiclesStoresContent extends Model<VehiclesStoresContent> {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column(DataType.UUID)
  id: string;

  @BelongsTo(() => VehiclesStore, {
    foreignKey: 'vehicleStoresId',
    targetKey: 'id',
    as: 'vehicle',
  })
  @AllowNull(false)
  @Column({
    type: DataType.UUID,
    comment: 'Car ID',
  })
  vehicleStoresId: string;

  @AllowNull(true)
  @Column({
    type: DataType.STRING,
    comment: 'Title',
  })
  title: string;

  @AllowNull(true)
  @Column({
    type: DataType.STRING,
    comment: 'Description',
  })
  description: string;

  @AllowNull(false)
  @Column({
    type: DataType.STRING,
    comment: 'File',
  })
  file: string;

  @AllowNull(false)
  @Column({
    type: DataType.BOOLEAN,
    comment: 'status',
    defaultValue: true,
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
