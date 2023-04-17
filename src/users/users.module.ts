import { Module } from '@nestjs/common';
import { PrismaService } from '../core/orm/prisma.service';
import { UsersController } from './users.controller';
import { PetsModule } from '../pets/pets.module';
import { UsersService } from './users.service';
import { PetsService } from '../pets/pets.service';

@Module({
  imports: [PetsModule, PrismaService],
  controllers: [UsersController],
  providers: [PrismaService, UsersService, PetsService],
})
export class UsersModule {}
