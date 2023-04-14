import { IsBoolean, IsNumber, IsString } from 'class-validator';

export class CreateClientDto {
  @IsString()
  name: string;

  @IsNumber()
  age: number;

  @IsString()
  email: string;

  @IsString()
  city: string;

  @IsBoolean()
  status: boolean;

  @IsString()
  profession: string;
}
