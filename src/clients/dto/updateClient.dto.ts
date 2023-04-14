import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class UpdateClientDto {
  @ApiProperty()
  @IsString()
  @IsOptional()
  name: string;

  @ApiProperty({ required: false })
  @IsNumber()
  @IsOptional()
  age: number;

  @ApiProperty({ required: true, example: 'user@gmail.com' })
  @IsString()
  @IsEmail()
  @IsOptional()
  email: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  city: string;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  status: boolean;

  @ApiProperty()
  @IsString()
  @IsOptional()
  profession: string;
}
