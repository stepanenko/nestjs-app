import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { ItemsController } from './items/items.controller';
import { ItemsService } from './items/items.service';

@Module({
  imports: [],
  controllers: [AppController, CatsController, ItemsController],
  providers: [AppService, ItemsService],
})
export class AppModule {}
