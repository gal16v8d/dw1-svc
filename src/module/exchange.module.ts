import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ExchangeController } from '../controller/exchange.controller';
import { Exchange, exchangeSchema } from '../model/schema/exchange.schema';
import { ExchangeService } from '../service/exchange.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Exchange.name, schema: exchangeSchema },
    ]),
  ],
  controllers: [ExchangeController],
  providers: [ExchangeService],
})
export class ExchangeModule {}
