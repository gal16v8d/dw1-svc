import config from '@app/config/config';
import { CardController } from '@app/controller/card.controller';
import { Card, CardSchema } from '@app/model/schema/card.schema';
import { CacheService } from '@app/service/cache.service';
import { CardService } from '@app/service/card.service';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { FlagServiceModule } from './flag.module';

@Module({
  imports: [
    ConfigModule.forRoot({ load: [config] }),
    FlagServiceModule,
    MongooseModule.forFeature([{ name: Card.name, schema: CardSchema }]),
  ],
  controllers: [CardController],
  providers: [CardService, CacheService],
})
export class CardModule {}
