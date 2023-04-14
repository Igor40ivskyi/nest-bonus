import { Injectable } from '@nestjs/common';

@Injectable()
export class ClientsService {
  private clients: any = [];

  async getAllClients() {
    return this.clients;
  }

  async createClient(clientData) {
    clientData.id = this.clients.length + 1;
    this.clients.push(clientData);
    return clientData;
  }

  async updateClient(clientData, id) {
    const clientForUpdate = this.clients[id - 1];
    const updatedClient = { ...clientForUpdate, ...clientData };
    this.clients[id - 1] = updatedClient;
  }
}
