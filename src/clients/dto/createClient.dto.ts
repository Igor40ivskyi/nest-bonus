import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateClientDto {
  @ApiProperty({ required: true, example: 'Vasya' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ required: false, example: 11 })
  @IsNumber()
  @IsOptional()
  age: number;

  @ApiProperty({ required: true, example: 'user@gmail.com' })
  @IsString()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({ required: true, example: 'Lviv' })
  @IsString()
  @IsNotEmpty()
  city: string;

  @ApiProperty({ required: false, example: false })
  @IsBoolean()
  @IsOptional()
  status: boolean;

  @ApiProperty({ required: false, example: 'teacher' })
  @IsString()
  @IsOptional()
  profession: string;
}
