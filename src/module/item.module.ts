import config from '@app/config/config';
import { ItemController } from '@app/controller/item.controller';
import { Item, ItemSchema } from '@app/model/schema/item.schema';
import { CacheService } from '@app/service/cache.service';
import { ItemService } from '@app/service/item.service';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { FlagServiceModule } from './flag.module';

@Module({
  imports: [
    ConfigModule.forRoot({ load: [config] }),
    FlagServiceModule,
    MongooseModule.forFeature([{ name: Item.name, schema: ItemSchema }]),
  ],
  controllers: [ItemController],
  providers: [ItemService, CacheService],
})
export class ItemModule {}
