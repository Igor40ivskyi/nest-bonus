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
} from '@nestjs/common';
import { ClientsService } from './clients.service';
import { CreateClientDto } from './dto/createClient.dto';
import { UpdateClientDto } from './dto/updateClient.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('clients')
@Controller('clients')
export class ClientsController {
  constructor(private clientsService: ClientsService) {}

  @Get()
  async getClientsList(@Req() req: any, @Res() res: any) {
    const clientsList = await this.clientsService.getAllClients();
    console.log(clientsList);
    return res.json(clientsList);
  }

  @Post()
  async createClient(
    @Req() req: any,
    @Res() res: any,
    @Body() body: CreateClientDto,
  ) {
    const createdClient = await this.clientsService.createClient(body);
    return res.status(HttpStatus.CREATED).json(createdClient);
  }

  @Patch('/:clientId')
  async updateClient(
    @Req() req: any,
    @Res() res: any,
    @Body() body: UpdateClientDto,
    @Param() params: any,
  ) {
    const updatedClient = await this.clientsService.updateClient(
      body,
      params.clientId,
    );

    return res.status(201).json({
      message: 'Client has been updated succesfully',
      data: updatedClient,
    });
  }

  @Delete('/:clientId')
  async deleteClient(@Req() req: any, @Res() res: any, @Param() params: any) {
    const deletedClient = this.clientsService.deleteClient(params.clientId);

    return res.status(201).json({
      message: 'Client has been deletede succesfully',
      data: deletedClient,
    });
  }
}
