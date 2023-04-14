import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Patch,
  Post,
  Req,
  Res,
} from '@nestjs/common';
import { ClientsService } from './clients.service';

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
  async createClient(@Req() req: any, @Res() res: any, @Body() body: any) {
    const createdClient = await this.clientsService.createClient(body);
    return res.status(HttpStatus.CREATED).json(createdClient);
  }

  @Patch('/:clientId')
  async updateClient(
    @Req() req: any,
    @Res() res: any,
    @Body() body: any,
    @Param() params: any,
  ) {
    this.clientsService.updateClient(body, params.clientId);
  }
}
