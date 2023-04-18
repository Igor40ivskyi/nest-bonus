import { Injectable } from '@nestjs/common';
import { PrismaService } from '../core/orm/prisma.service';
import { CreatePetDto } from './dto/pets.dto';
import { Pet } from '@prisma/client';

@Injectable()
export class PetsService {
  constructor(private readonly prismaService: PrismaService) {}

  async createPet(petData) {
    console.log(petData);
    return await this.prismaService.pet.create({
      data: {
        name: petData.name,
        type: petData.type,
        status: petData.status,
      },
    });
  }
}
