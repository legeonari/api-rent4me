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
} from 'sequelize-typescript';

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
    'secuodaryColor',
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

  @AllowNull(false)
  @Column({
    type: DataType.STRING,
    comment: 'Logo partner',
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
  secuodaryColor: string;

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
