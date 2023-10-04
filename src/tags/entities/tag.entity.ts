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
  HasMany,
} from 'sequelize-typescript';

//Models
import { UsersTags } from 'src/users-tags/entities/users-tags.entity';

@Table({
  modelName: 'tags',
})
export class Tag extends Model<Tag> {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column(DataType.UUID)
  id: string;

  @AllowNull(false)
  @Column({
    type: DataType.STRING,
    comment: 'Tag',
  })
  tag: string;

  @AllowNull(false)
  @Column({
    type: DataType.INTEGER,
    comment: 'Order',
    defaultValue: 0,
  })
  order: number;

  @AllowNull(false)
  @Column({
    type: DataType.STRING,
    comment: 'Color',
  })
  color: string;

  @AllowNull(false)
  @Column({
    type: DataType.ENUM,
    values: ['tag', 'status'],
    comment: 'Type Tag',
  })
  type: string;

  //TODO: Será que podemos criar uma tabela somente para esses ids extenos?
  // No caso, podemos fazer isso para ter IDS da mesma tag para mais de uma integração
  @AllowNull(true)
  @Column({
    type: DataType.STRING,
    comment: 'ID TAG Integrations',
  })
  idTagExternal: string;

  //Foreign
  @HasMany(() => UsersTags, 'tagsId')
  users;

  @CreatedAt
  @Column
  createdAt!: Date;

  @UpdatedAt
  @Column
  updatedAt!: Date;

  @DeletedAt
  deletedAt!: Date;
}
