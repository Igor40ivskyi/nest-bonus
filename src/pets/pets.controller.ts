import { Controller, HttpStatus, Post, Req, Res, Body } from '@nestjs/common';
import { PetsService } from './pets.service';
import { Pet } from '@prisma/client';

@Controller('pets')
export class PetsController {
  constructor(private readonly petsService: PetsService) {}

  @Post()
  async createPet(@Req() req: any, @Res() res: any, @Body() body: Pet) {
    return res.status(HttpStatus.CREATED).json({
      message: 'pet has been created successfully',
      data: await this.petsService.createPet(body),
    });
  }
}
