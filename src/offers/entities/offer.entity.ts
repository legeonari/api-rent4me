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
  BelongsTo,
  HasMany,
} from 'sequelize-typescript';

//Entity
import { Vehicle } from 'src/vehicles/entities/vehicle.entity';
import { Partner } from 'src/partners/entities/partner.entity';
import { VehiclesCategory } from 'src/vehicles_categories/entities/vehicles_category.entity';
import { OfferDetail } from 'src/offers_details/entities/offers_detail.entity';

@Table({
  modelName: 'offers',
})
export class Offer extends Model<Offer> {
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

  @BelongsTo(() => VehiclesCategory, {
    foreignKey: 'vehicleCategoryId',
    targetKey: 'id',
    as: 'category',
  })
  @AllowNull(false)
  @Column({
    type: DataType.UUID,
    comment: 'Category ID',
  })
  vehicleCategoryId: string;

  @AllowNull(false)
  @Column({
    type: DataType.BOOLEAN,
    comment: 'Status offers',
    defaultValue: true,
  })
  status: boolean;

  @HasMany(() => OfferDetail, 'offerId')
  offersDetail;

  @CreatedAt
  @Column
  createdAt!: Date;

  @UpdatedAt
  @Column
  updatedAt!: Date;

  @DeletedAt
  deletedAt!: Date;
}
