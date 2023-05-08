//Dependencies
import {
  Model,
  Table,
  PrimaryKey,
  Column,
  DataType,
  Default,
  AllowNull,
  BeforeCreate,
  BeforeUpdate,
  CreatedAt,
  UpdatedAt,
  DeletedAt,
  BelongsTo,
  HasMany,
  HasOne,
} from 'sequelize-typescript';

//Entity
import { UsersInterest } from 'src/users-interest/entities/users-interest.entity';
import { VehiclesCategory } from 'src/vehicles_categories/entities/vehicles_category.entity';
import { VehiclesDimension } from 'src/vehicles_dimensions/entities/vehicles_dimension.entity';
import { VehiclesGallery } from 'src/vehicles_gallery/entities/vehicles_gallery.entity';
import { VehiclesItem } from 'src/vehicles_itens/entities/vehicles_item.entity';
import { VehiclesMotor } from 'src/vehicles_motor/entities/vehicles_motor.entity';
import { VehiclesStore } from 'src/vehicles_stores/entities/vehicles_store.entity';
import { Offer } from 'src/offers/entities/offer.entity';
import { OfferDetail } from 'src/offers_details/entities/offers_detail.entity';
import { VehiclesBrand } from 'src/vehicles_brand/entities/vehicles_brand.entity';
import { FilesImage } from 'src/files_images/entities/files_image.entity';

@Table({
  modelName: 'vehicles',
})
export class Vehicle extends Model<Vehicle> {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column(DataType.UUID)
  id: string;

  @BelongsTo(() => VehiclesCategory, {
    foreignKey: 'vehicleCategoryId',
    targetKey: 'id',
    as: 'category',
  })
  @AllowNull(false)
  @Column({
    type: DataType.UUID,
    comment: 'Category',
  })
  vehicleCategoryId: string;

  @BelongsTo(() => VehiclesBrand, {
    foreignKey: 'vehicleBrandId',
    targetKey: 'id',
    as: 'brand',
  })
  @AllowNull(false)
  @Column({
    type: DataType.UUID,
    comment: 'Brand',
  })
  vehicleBrandId: string;

  @AllowNull(false)
  @Column({
    type: DataType.STRING,
    comment: 'Name',
  })
  name: string;

  @AllowNull(false)
  @Column({
    type: DataType.STRING,
    comment: 'Subtitle',
  })
  subtitle: string;

  @AllowNull(false)
  @Column({
    type: DataType.STRING,
    comment: 'Tags',
  })
  tags: string;

  @AllowNull(false)
  @Column({
    type: DataType.TEXT,
    comment: 'About',
  })
  about: string;

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

  @BeforeCreate
  @BeforeUpdate
  static addRoute(instance: Vehicle) {
    instance.route = instance.name
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/([^\w]+|\s+)/g, '-')
      .replace(/\-\-+/g, '-')
      .replace(/(^-+|-+$)/, '')
      .toLowerCase();
  }
  @Column({
    type: DataType.STRING,
    comment: 'Route',
  })
  route: string;

  @AllowNull(false)
  @Column({
    type: DataType.BOOLEAN,
    comment: 'status',
    defaultValue: true,
  })
  status: boolean;

  //Foreign
  @HasMany(() => UsersInterest, 'vehicleId')
  interest;

  @HasOne(() => VehiclesDimension, 'vehicleId')
  dimmension;

  @HasOne(() => VehiclesMotor, 'vehicleId')
  motor;

  @HasMany(() => VehiclesItem, 'vehicleId')
  items;

  @HasMany(() => VehiclesStore, 'vehicleId')
  stores;

  @HasMany(() => VehiclesGallery, 'vehicleId')
  galleries;

  @HasMany(() => Offer, 'vehicleId')
  offers;

  @HasMany(() => OfferDetail, 'vehicleId')
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
