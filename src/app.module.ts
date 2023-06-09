import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { UsersModule } from './users/users.module';
import { PetsModule } from './pets/pets.module';
import { ClientsModule } from './clients/clients.module';

@Module({
  imports: [UsersModule, PetsModule, ClientsModule],
  controllers: [AppController, UsersController],
  providers: [AppService, UsersService],
})
export class AppModule {}
