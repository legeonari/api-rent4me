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
} from 'sequelize-typescript';

@Table({
  modelName: 'files-image',
})
export class FilesImage extends Model<FilesImage> {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column(DataType.UUID)
  id: string;

  @AllowNull(true)
  @Column({
    type: DataType.STRING,
    comment: 'Format',
  })
  format: string;

  @AllowNull(true)
  @Column({
    type: DataType.STRING,
    comment: 'Original',
  })
  image: string;

  @AllowNull(true)
  @Column({
    type: DataType.STRING,
    comment: 'Name',
  })
  name: string;

  @AllowNull(true)
  @Column({
    type: DataType.STRING,
    comment: 'Base url',
  })
  baseUrl: string;

  @AllowNull(true)
  @Column({
    type: DataType.STRING,
    comment: 'Folder url',
  })
  folder: string;

  @CreatedAt
  @Column
  createdAt!: Date;

  @UpdatedAt
  @Column
  updatedAt!: Date;

  @DeletedAt
  deletedAt!: Date;
}
