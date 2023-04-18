import {
  Controller,
  HttpStatus,
  Post,
  Req,
  Res,
  Body,
  Get,
  Param,
  Delete,
} from '@nestjs/common';
import { PetsService } from './pets.service';
import { Pet } from '@prisma/client';
import { ApiTags } from '@nestjs/swagger';
import { CreatePetDto } from './dto/pets.dto';

@ApiTags('Pets')
@Controller('pets')
export class PetsController {
  constructor(private readonly petsService: PetsService) {}

  @Post()
  async createPet(
    @Req() req: any,
    @Res() res: any,
    @Body() body: CreatePetDto,
  ) {
    return res.status(HttpStatus.CREATED).json({
      message: 'pet has been created successfully',
      data: await this.petsService.createPet(body),
    });
  }

  @Get()
  async getPetsList(@Req() req: any, @Res() res: any) {
    return res.status(HttpStatus.OK).json(await this.petsService.getPets());
  }

  @Get('/:petId')
  async getPetById(
    @Req() req: any,
    @Res() res: any,
    @Param('petId') petId: string,
  ) {
    return res
      .status(HttpStatus.OK)
      .json(await this.petsService.getPetById(petId));
  }

  @Delete('/:petId')
  async deletePet(
    @Req() req: any,
    @Res() res: any,
    @Param('petId') petId: string,
  ) {
    return res.status(HttpStatus.OK).json({
      message: 'pet has been deleted successfully',
      data: await this.petsService.deletePet(petId),
    });
  }
}
