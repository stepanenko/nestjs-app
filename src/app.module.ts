
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { CatsController } from './cats/cats.controller';
import { ItemsController } from './items/items.controller';
import { ItemsService } from './items/items.service';
import { ItemsModule } from './items/items.module';

import { MongooseModule } from '@nestjs/mongoose';
import config from './config/keys';
import { CatsService } from './cats/cats.service';

@Module({
  imports: [
    ItemsModule,
    MongooseModule
      .forRoot(config.mongoURI, { useNewUrlParser: true }),
  ],
  controllers: [
    AppController,
    CatsController,
    ItemsController,
  ],
  providers: [
    AppService,
    ItemsService,
    CatsService,
  ],
})
export class AppModule {}
