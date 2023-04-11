//Dependencies
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional, IsNumber, IsEnum } from 'class-validator';

export class CreateVehiclesMotorDto {
  @ApiProperty({
    description: 'Motorization',
    example: '1.5 Turbo',
    type: String,
  })
  @IsOptional()
  @IsString()
  motorization: string;

  @ApiProperty({
    description: 'Type fuel',
    example: 'flex',
    enum: ['flex', 'gasoline', 'alcohol', 'diesel'],
    isArray: false,
    default: 'flex',
  })
  @IsOptional()
  @IsEnum(['flex', 'gasoline', 'alcohol', 'diesel'])
  fuel: string;

  @ApiProperty({
    description: 'Power cv',
    example: 150,
    type: Number,
  })
  @IsOptional()
  @IsNumber()
  power: number;

  @ApiProperty({
    description: 'Power Alcohol cv',
    example: 160,
    type: Number,
  })
  @IsOptional()
  @IsNumber()
  powerAlcohol: number;

  @ApiProperty({
    description: 'Torque',
    example: 21.3,
    type: Number,
  })
  @IsOptional()
  @IsNumber()
  torque: number;

  @ApiProperty({
    description: 'Torque Alcohol',
    example: 21.4,
    type: Number,
  })
  @IsOptional()
  @IsNumber()
  torqueAlcohol: number;

  @ApiProperty({
    description: 'Max speed',
    example: 180,
    type: Number,
  })
  @IsOptional()
  @IsNumber()
  maxSpeed: number;

  @ApiProperty({
    description: 'Max speed Alcohol',
    example: 180,
    type: Number,
  })
  @IsOptional()
  @IsNumber()
  maxSpeedAlcohol: number;

  @ApiProperty({
    description: 'Zero to Hundred',
    example: 6.3,
    type: Number,
  })
  @IsOptional()
  @IsNumber()
  zeroHundred: number;

  @ApiProperty({
    description: 'Zero to Hundred Alcohol',
    example: 6.0,
    type: Number,
  })
  @IsOptional()
  @IsNumber()
  zeroHundredAlcohol: number;

  @ApiProperty({
    description: 'Consumption City',
    example: 9.8,
    type: Number,
  })
  @IsOptional()
  @IsNumber()
  consumptionCity: number;

  @ApiProperty({
    description: 'Consumption City Alcohol',
    example: 6.7,
    type: Number,
  })
  @IsOptional()
  @IsNumber()
  consumptionCityAlcohol: number;

  @ApiProperty({
    description: 'Consumption Road',
    example: 11.7,
    type: Number,
  })
  @IsOptional()
  @IsNumber()
  consumptionRoad: number;

  @ApiProperty({
    description: 'Consumption Road Alcohol',
    example: 8,
    type: Number,
  })
  @IsOptional()
  @IsNumber()
  consumptionRoadAlcohol: number;

  @ApiProperty({
    description: 'Type shift',
    example: 'automatic',
    enum: ['manual', 'automatic', 'automated', 'cvt'],
    default: 'automatic',
    isArray: false,
  })
  @IsOptional()
  @IsEnum(['manual', 'automatic', 'automated', 'cvt'])
  gearshift: string;

  @ApiProperty({
    description: 'Type traction',
    example: 'forward',
    enum: ['4x4', 'AWD', 'forward', 'rear'],
    default: 'forward',
    isArray: false,
  })
  @IsOptional()
  @IsEnum(['4x4', 'AWD', 'forward', 'rear'])
  traction: string;

  @ApiProperty({
    description: 'Type direction',
    example: 'hydraulics',
    enum: ['mechanics', 'hydraulics', 'electric', 'electroHydraulics'],
    default: 'hydraulics',
    isArray: false,
  })
  @IsOptional()
  @IsEnum(['mechanics', 'hydraulics', 'electric', 'electroHydraulics'])
  direction: string;

  @ApiProperty({
    description: 'Desc. Front suspension',
    example:
      'Suspensão tipo McPherson e dianteira com barra estabilizadora, roda tipo independente e molas helicoidal.',
    type: String,
  })
  @IsOptional()
  @IsString()
  frontSuspension: string;

  @ApiProperty({
    description: 'Desc. Rear suspension',
    example:
      'Suspensão tipo eixo de torção, roda tipo semi-independente e molas helicoidal.',
    type: String,
  })
  @IsOptional()
  @IsString()
  rearSuspension: string;

  @ApiProperty({
    description: 'Desc. Breaks',
    example: 'Freios integral',
    type: String,
  })
  @IsOptional()
  @IsString()
  breaks: string;
}
