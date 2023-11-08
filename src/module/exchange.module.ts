import config from '@app/config/config';
import { ExchangeController } from '@app/controller/exchange.controller';
import { Exchange, exchangeSchema } from '@app/model/schema/exchange.schema';
import { CacheService } from '@app/service/cache.service';
import { ExchangeService } from '@app/service/exchange.service';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
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
