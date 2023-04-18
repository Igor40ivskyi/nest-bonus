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
  UseInterceptors,
} from '@nestjs/common';
import { CreateUserDto } from './dto/users.dto';
import { UsersService } from './users.service';
import { ApiTags } from '@nestjs/swagger';
import { FileFieldsInterceptor } from '@nestjs/platform-express';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  async getUsersList(@Req() req: any, @Res() res: any) {
    return res
      .status(HttpStatus.OK)
      .json(await this.userService.getUsersList());
  }

  @Get('/:userId')
  async getUserInfo(
    @Req() req: any,
    @Res() res: any,
    @Param('userId') userId: string,
  ) {
    return res
      .status(HttpStatus.OK)
      .json(await this.userService.getUserById(userId));
  }

  @Post()
  async createUser(
    @Req() req: any,
    @Body() body: CreateUserDto,
    @Res() res: any,
  ) {
    return res
      .status(HttpStatus.CREATED)
      .json(await this.userService.createUser(body));
  }

  @Delete('/:userId')
  async deleteUser(
    @Req() req: any,
    @Res() res: any,
    @Param('userId') userId: string,
  ) {
    return res.status(HttpStatus.OK).json({
      message: 'User has been deleted successfully',
      data: await this.userService.deleteUser(userId),
    });
  }

  @Patch('/:userId')
  async updateUser(
    @Req() req: any,
    @Res() res: any,
    @Param('userId') userId: string,
    @Body() body: any,
  ) {
    return res.json({
      message: 'user has been updated successfully',
      data: await this.userService.updateUser(userId, body),
    });
  }
}
