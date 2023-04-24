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
  DefaultScope,
  AfterCreate,
} from 'sequelize-typescript';

//Models
import { Users } from 'src/users/entities/user.entity';

@Table({
  modelName: 'users_sent_messages_whatsapp',
})
@DefaultScope(() => ({
  attributes: ['userId', 'template', 'message', 'createdAt'],
}))
export class UsersSentMessagesWhatsapp extends Model<UsersSentMessagesWhatsapp> {
  @AfterCreate
  static created() {
    console.log('\n\n\n', 'eventEmitter.emit');
  }
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column(DataType.UUID)
  id: string;

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

  @AllowNull(false)
  @Column({
    type: DataType.STRING,
    comment: 'Tamplate Whatsapp',
  })
  template: string;

  @AllowNull(true)
  @Column({
    type: DataType.STRING,
    comment: 'ID Contact UTALK',
  })
  idContactUtalk: string;

  @AllowNull(false)
  @Column({
    type: DataType.TEXT,
    comment: 'Messange sent',
  })
  message: string;

  @AllowNull(true)
  @Column({
    type: DataType.TEXT,
    comment: 'Note',
  })
  note: string;

  @AllowNull(false)
  @Column({
    type: DataType.BOOLEAN,
    comment: 'Status send message',
    defaultValue: false,
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

// ALTER TABLE users_sent_messages_whatsapps MODIFY COLUMN message LONGTEXT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
