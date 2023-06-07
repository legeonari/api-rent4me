//Dependencies
import {
  Model,
  Table,
  PrimaryKey,
  Column,
  DataType,
  Default,
  AllowNull,
  CreatedAt,
  UpdatedAt,
  DeletedAt,
  DefaultScope,
  BelongsTo,
} from 'sequelize-typescript';

//Entity
import { Vehicle } from 'src/vehicles/entities/vehicle.entity';
import { VehiclesOptionsIten } from 'src/vehicles_options_itens/entities/vehicles_options_item.entity';

@Table({
  modelName: 'vehicles_itens',
})
export class VehiclesItem extends Model<VehiclesItem> {
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

  @BelongsTo(() => VehiclesOptionsIten, {
    foreignKey: 'vehicleOptionItemId',
    targetKey: 'id',
    as: 'item',
  })
  @AllowNull(false)
  @Column({
    type: DataType.UUID,
    comment: 'Car ID',
  })
  vehicleOptionItemId: string;

  @AllowNull(false)
  @Column({
    type: DataType.BOOLEAN,
    comment: 'Contrast item',
    defaultValue: false,
  })
  contrast: boolean;

  @CreatedAt
  @Column
  createdAt!: Date;

  @UpdatedAt
  @Column
  updatedAt!: Date;

  @DeletedAt
  deletedAt!: Date;
}
