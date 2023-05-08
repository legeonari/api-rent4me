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
  original: string;

  @AllowNull(true)
  @Column({
    type: DataType.STRING,
    comment: 'Thumb Mini',
  })
  size65x65: string;

  @AllowNull(true)
  @Column({
    type: DataType.STRING,
    comment: 'Gallery',
  })
  size450x300: string;

  @AllowNull(true)
  @Column({
    type: DataType.STRING,
    comment: 'Store',
  })
  size1080x1800: string;

  @AllowNull(true)
  @Column({
    type: DataType.STRING,
    comment: 'Store',
  })
  size450x270: string;

  @CreatedAt
  @Column
  createdAt!: Date;

  @UpdatedAt
  @Column
  updatedAt!: Date;

  @DeletedAt
  deletedAt!: Date;
}
