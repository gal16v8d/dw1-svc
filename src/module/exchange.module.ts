import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import config from '../config/config';
import { ExchangeController } from '../controller/exchange.controller';
import { Exchange, exchangeSchema } from '../model/schema/exchange.schema';
import { CacheService } from '../service/cache.service';
import { ExchangeService } from '../service/exchange.service';
import { FlagServiceModule } from './flag.module';

@Module({
  imports: [
    ConfigModule.forRoot({ load: [config] }),
    FlagServiceModule,
    MongooseModule.forFeature([
      { name: Exchange.name, schema: exchangeSchema },
    ]),
  ],
  controllers: [ExchangeController],
  providers: [ExchangeService, CacheService],
})
export class ExchangeModule {}
