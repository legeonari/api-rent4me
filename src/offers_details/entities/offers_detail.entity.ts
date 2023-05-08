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
import { Offer } from 'src/offers/entities/offer.entity';
import { OffersPromotion } from 'src/offers_promotion/entities/offers_promotion.entity';

@Table({
  modelName: 'offers_details',
})
export class OfferDetail extends Model<OfferDetail> {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column(DataType.UUID)
  id: string;

  @BelongsTo(() => Offer, {
    foreignKey: 'offerId',
    targetKey: 'id',
    as: 'offer',
  })
  @AllowNull(false)
  @Column({
    type: DataType.UUID,
    comment: 'Offer ID',
  })
  offerId: string;

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
    type: DataType.INTEGER,
    comment: 'Period offers',
  })
  period: number;

  @AllowNull(false)
  @Column({
    type: DataType.INTEGER,
    comment: 'Mileage month',
  })
  mileage: number;

  @AllowNull(false)
  @Column({
    type: DataType.FLOAT,
    comment: 'Price offers',
  })
  price: number;

  @AllowNull(false)
  @Column({
    type: DataType.DATE,
    comment: 'Finish offers',
    defaultValue: new Date(),
  })
  deadline: Date;

  @AllowNull(false)
  @Column({
    type: DataType.BOOLEAN,
    comment: 'Status offers',
    defaultValue: true,
  })
  status: boolean;

  @HasMany(() => OffersPromotion, 'offerId')
  offersPromotion;

  @CreatedAt
  @Column
  createdAt!: Date;

  @UpdatedAt
  @Column
  updatedAt!: Date;

  @DeletedAt
  deletedAt!: Date;
}
