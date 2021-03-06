import { Module } from '@nestjs/common';
import { ItemsModule } from './items/items.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ItemsModule,
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URI),
  ],
})
export class AppModule {}
