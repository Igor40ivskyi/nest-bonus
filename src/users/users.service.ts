import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';

import { CreateUserDto } from './dto/users.dto';
import { PrismaService } from '../core/orm/prisma.service';

@Injectable()
export class UsersService {
  constructor(private readonly prismaService: PrismaService) {}

  async createUser(userData: CreateUserDto): Promise<User> {
    return this.prismaService.user.create({
      data: {
        name: userData.name,
        city: userData.city,
        status: userData.status,
        age: userData.age,
        email: userData.email,
      },
    });
  }

  async getUsersList(): Promise<User[]> {
    return this.prismaService.user.findMany({});
  }

  async getUserById(userId: string) {
    return this.prismaService.user.findFirst({
      where: { id: Number(userId) },
      include: {
        pets: true,
      },
    });
  }

  async deleteUser(userId: string) {
    return this.prismaService.user.delete({
      where: { id: Number(userId) },
    });
  }

  async updateUser(userId: string, updateData: any) {
    return this.prismaService.user.update({
      where: { id: Number(userId) },
      data: { ...updateData },
    });
  }
}
