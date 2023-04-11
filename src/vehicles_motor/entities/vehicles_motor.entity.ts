//Dependencies
import {
  Model,
  Table,
  PrimaryKey,
  Column,
  DataType,
  Default,
  AllowNull,
  DefaultScope,
  BelongsTo,
  CreatedAt,
  UpdatedAt,
  DeletedAt,
} from 'sequelize-typescript';

//Entity
import { Vehicle } from 'src/vehicles/entities/vehicle.entity';

@Table({
  modelName: 'vehicles_motor',
})
@DefaultScope(() => ({
  attributes: [
    'motorization',
    'fuel',
    'power',
    'powerAlcohol',
    'torque',
    'torqueAlcohol',
    'maxSpeed',
    'maxSpeedAlcohol',
    'zeroHundred',
    'zeroHundredAlcohol',
    'consumptionCity',
    'consumptionCityAlcohol',
    'consumptionRoad',
    'consumptionRoadAlcohol',
    'gearshift',
    'traction',
    'direction',
    'frontSuspension',
    'rearSuspension',
    'breaks',
  ],
}))
export class VehiclesMotor extends Model<VehiclesMotor> {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column(DataType.UUID)
  id: string;

  @BelongsTo(() => Vehicle, {
    foreignKey: 'vehicleId',
    targetKey: 'id',
    as: 'vehicle',
  })
  @AllowNull(false)
  @Column({
    type: DataType.UUID,
    comment: 'Car ID',
  })
  vehicleId: string;

  @AllowNull(true)
  @Column({
    type: DataType.STRING,
    comment: 'Motorization',
  })
  motorization: string;

  @AllowNull(true)
  @Column({
    type: DataType.ENUM,
    values: ['flex', 'gasoline', 'alcohol', 'diesel'],
    defaultValue: 'flex',
    comment: 'Fuel accept',
  })
  fuel: string;

  @AllowNull(true)
  @Column({
    type: DataType.INTEGER,
    comment: 'Power',
  })
  power: number;

  @AllowNull(true)
  @Column({
    type: DataType.INTEGER,
    comment: 'Power Alcohol',
  })
  powerAlcohol: number;

  @AllowNull(true)
  @Column({
    type: DataType.INTEGER,
    comment: 'Torque',
  })
  torque: number;

  @AllowNull(true)
  @Column({
    type: DataType.INTEGER,
    comment: 'Torque Alcohol',
  })
  torqueAlcohol: number;

  @AllowNull(true)
  @Column({
    type: DataType.INTEGER,
    comment: 'Max speed',
  })
  maxSpeed: number;

  @AllowNull(true)
  @Column({
    type: DataType.INTEGER,
    comment: 'Max speed Alcohol',
  })
  maxSpeedAlcohol: number;

  @AllowNull(true)
  @Column({
    type: DataType.FLOAT,
    comment: 'Zero Hundred',
  })
  zeroHundred: number;

  @AllowNull(true)
  @Column({
    type: DataType.FLOAT,
    comment: 'Zero Hundred Alcohol',
  })
  zeroHundredAlcohol: number;

  @AllowNull(true)
  @Column({
    type: DataType.FLOAT,
    comment: 'Consumption City',
  })
  consumptionCity: number;

  @AllowNull(true)
  @Column({
    type: DataType.FLOAT,
    comment: 'Consumption City Alcohol',
  })
  consumptionCityAlcohol: number;

  @AllowNull(true)
  @Column({
    type: DataType.FLOAT,
    comment: 'Consumption Road',
  })
  consumptionRoad: number;

  @AllowNull(true)
  @Column({
    type: DataType.FLOAT,
    comment: 'Consumption City Alcohol',
  })
  consumptionRoadAlcohol: number;

  @AllowNull(true)
  @Column({
    type: DataType.ENUM,
    values: ['manual', 'automatic', 'automated', 'cvt'],
    defaultValue: 'automatic',
    comment: 'Gearshift config',
  })
  gearshift: string;

  @AllowNull(true)
  @Column({
    type: DataType.ENUM,
    values: ['4x4', 'AWD', 'forward', 'rear'],
    defaultValue: 'forward',
    comment: 'Traction config',
  })
  traction: string;

  @AllowNull(true)
  @Column({
    type: DataType.ENUM,
    values: ['mechanics', 'hydraulics', 'electric', 'electroHydraulics'],
    defaultValue: 'hydraulics',
    comment: 'Direction config',
  })
  direction: string;

  @AllowNull(true)
  @Column({
    type: DataType.STRING,
    comment: 'Front Suspension',
  })
  frontSuspension: string;

  @AllowNull(true)
  @Column({
    type: DataType.STRING,
    comment: 'Rear Suspension',
  })
  rearSuspension: string;

  @AllowNull(true)
  @Column({
    type: DataType.STRING,
    comment: 'Breaks',
  })
  breaks: string;

  @CreatedAt
  @Column
  createdAt!: Date;

  @UpdatedAt
  @Column
  updatedAt!: Date;

  @DeletedAt
  deletedAt!: Date;
}
