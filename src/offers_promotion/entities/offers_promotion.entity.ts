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
} from 'sequelize-typescript';

//Entity
import { Offer } from 'src/offers/entities/offer.entity';

@Table({
  modelName: 'offers_promotions',
})
export class OffersPromotion extends Model<OffersPromotion> {
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

  @AllowNull(true)
  @Column({
    type: DataType.STRING,
    comment: 'Text promotion',
  })
  text: string;

  @AllowNull(false)
  @Column({
    type: DataType.DATE,
    comment: 'Finish promotion',
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

  @CreatedAt
  @Column
  createdAt!: Date;

  @UpdatedAt
  @Column
  updatedAt!: Date;

  @DeletedAt
  deletedAt!: Date;
}
