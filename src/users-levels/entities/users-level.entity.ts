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
  BeforeCreate,
  DefaultScope,
  HasMany,
} from 'sequelize-typescript';

//Entity
import { Users } from 'src/users/entities/user.entity';

@Table({
  modelName: 'users_level',
})
@DefaultScope(() => ({
  attributes: ['id', 'name', 'description', 'thumb', 'route'],
}))
export class UsersLevels extends Model<UsersLevels> {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column(DataType.UUID)
  id: string;

  @AllowNull(false)
  @Column({
    type: DataType.STRING,
    comment: 'Level',
  })
  name: string;

  @AllowNull(false)
  @Column({
    type: DataType.TEXT,
    comment: 'Description',
  })
  description: string;

  @BeforeCreate
  static addImageIcon(instance: UsersLevels) {
    instance.thumb = !instance.thumb
      ? `https://fakeimg.pl/250/0e0e0e/f2f2f2/?retina=1&font_size=150&text=${instance.name
          .charAt(0)
          .toUpperCase()}&font=bebas=`
      : instance.thumb;
  }
  @AllowNull(true)
  @Column({
    type: DataType.STRING,
    comment: 'URL thumb',
  })
  thumb: string;

  @AllowNull(false)
  @Column({
    type: DataType.BOOLEAN,
    comment: 'Public',
    defaultValue: false,
  })
  public: boolean;

  @AllowNull(true)
  @Column({
    type: DataType.STRING,
    comment: 'route',
  })
  route: string;

  @HasMany(() => Users, 'userLevelId')
  users: Users[];

  @CreatedAt
  @Column
  createdAt!: Date;

  @UpdatedAt
  @Column
  updatedAt!: Date;

  @DeletedAt
  deletedAt!: Date;
}
