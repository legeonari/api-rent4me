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
  DefaultScope,
} from 'sequelize-typescript';

@Table({
  modelName: 'vehicles_category',
})
@DefaultScope(() => ({
  attributes: ['id', 'name', 'thumb', 'description', 'status', 'route'],
}))
export class VehiclesCategory extends Model<VehiclesCategory> {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column(DataType.UUID)
  id: string;

  @AllowNull(false)
  @Column({
    type: DataType.STRING,
    comment: 'Name',
  })
  name: string;

  @AllowNull(true)
  @Column({
    type: DataType.STRING,
    comment: 'Thumb',
  })
  thumb: string;

  @AllowNull(false)
  @Column({
    type: DataType.TEXT,
    comment: 'Description',
  })
  description: string;

  @AllowNull(false)
  @Column({
    type: DataType.BOOLEAN,
    comment: 'status',
    defaultValue: true,
  })
  status: boolean;

  @BeforeCreate
  @BeforeUpdate
  static addRoute(instance: VehiclesCategory) {
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

  @CreatedAt
  @Column
  createdAt!: Date;

  @UpdatedAt
  @Column
  updatedAt!: Date;

  @DeletedAt
  deletedAt!: Date;
}
