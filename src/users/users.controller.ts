import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Patch,
  Post,
  Req,
  Res,
  HttpCode,
} from '@nestjs/common';
import { CreateUserDto } from './dto/users.dto';
import { UsersService } from './users.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  async getUsersList() {}

  @Post()
  async createUser(
    @Req() req: any,
    @Body() body: CreateUserDto,
    @Res() res: any,
  ) {
    return res.json(await this.userService.createUser(body));
  }

  @Delete('/:id')
  async deleteUser() {}

  @Patch('/:id')
  async updateUser() {}

  @Post('/animals/:id')
  async addNewPet() {}
}
