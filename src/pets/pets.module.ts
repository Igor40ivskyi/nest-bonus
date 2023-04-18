import { Module } from '@nestjs/common';
import { PetsService } from './pets.service';
import { PetsController } from './pets.controller';
import { PrismaService } from '../core/orm/prisma.service';

@Module({
  imports: [],
  controllers: [PetsController],
  providers: [PetsService, PrismaService],
})
export class PetsModule {}
