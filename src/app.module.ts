
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { CarsModule } from './cars/cars.module';
import { ItemsModule } from './items/items.module';

import config from './config/keys';

@Module({
  imports: [
    ItemsModule,
    CarsModule,
    MongooseModule
      .forRoot(config.mongoURI, { useNewUrlParser: true }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
