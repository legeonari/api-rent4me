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
import { FilesImage } from 'src/files_images/entities/files_image.entity';

@Table({
  modelName: 'partners',
})
@DefaultScope(() => ({
  attributes: [
    'id',
    'name',
    'productName',
    'cnpj',
    'logo',
    'primaryColor',
    'secondaryColor',
    'site',
    'createdAt',
  ],
}))
export class Partner extends Model<Partner> {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column(DataType.UUID)
  id: string;

  @AllowNull(false)
  @Column({
    type: DataType.STRING,
    comment: 'Name partner',
  })
  name: string;

  @AllowNull(false)
  @Column({
    type: DataType.STRING,
    comment: 'Product name Partner',
  })
  productName: string;

  @AllowNull(false)
  @Column({
    type: DataType.STRING,
    comment: 'CNPJ partner',
  })
  cnpj: string;

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
  logo: string;

  @AllowNull(false)
  @Column({
    type: DataType.STRING,
    comment: 'Primary color',
  })
  primaryColor: string;

  @AllowNull(false)
  @Column({
    type: DataType.STRING,
    comment: 'Secondary color',
  })
  secondaryColor: string;

  @AllowNull(false)
  @Column({
    type: DataType.STRING,
    comment: 'Site product',
  })
  site: string;

  @CreatedAt
  @Column
  createdAt!: Date;

  @UpdatedAt
  @Column
  updatedAt!: Date;

  @DeletedAt
  deletedAt!: Date;
}
