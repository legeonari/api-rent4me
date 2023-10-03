//Dependencies
import {
  Model,
  Table,
  PrimaryKey,
  Column,
  DataType,
  Default,
  AllowNull,
  BelongsTo,
  CreatedAt,
  UpdatedAt,
  DeletedAt,
} from 'sequelize-typescript';

//Models
import { Users } from 'src/users/entities/user.entity';
import { Tag } from 'src/tags/entities/tag.entity';

@Table({
  modelName: 'users_tags',
})
export class UsersTags extends Model<UsersTags> {
  @BelongsTo(() => Users, {
    foreignKey: 'userId',
    targetKey: 'id',
    as: 'user',
  })
  @AllowNull(false)
  @Column({
    type: DataType.UUID,
    comment: 'User ID',
  })
  userId: string;

  @BelongsTo(() => Tag, {
    foreignKey: 'tagsId',
    targetKey: 'id',
    as: 'tags',
  })
  @AllowNull(false)
  @Column({
    type: DataType.UUID,
    comment: 'Tag ID',
  })
  tagsId: string;

  @AllowNull(true)
  @Column({
    type: DataType.STRING,
    comment: 'Observation',
  })
  observation: string;

  @AllowNull(true)
  @Column({
    type: DataType.BOOLEAN,
    comment: 'Status account',
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
