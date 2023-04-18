import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePetDto {
  @ApiProperty({ required: true, example: 'Dino' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ required: true, example: 'German shepherd' })
  @IsString()
  @IsNotEmpty()
  type: string;

  @ApiProperty({ required: false, example: true })
  @IsBoolean()
  @IsOptional()
  status: boolean;
}
