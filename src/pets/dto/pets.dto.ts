import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreatePetDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  type: string;

  @IsBoolean()
  @IsOptional()
  status: boolean;
}
