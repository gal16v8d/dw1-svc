import { ExchangeDto } from '@app/model/dto/exchange.dto';
import { Exchange, ExchangeDocument } from '@app/model/schema/exchange.schema';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { GenericService } from './generic.service';

@Injectable()
export class ExchangeService extends GenericService<Exchange, ExchangeDto> {
  constructor(
    @InjectModel(Exchange.name)
    readonly exchangeService: Model<ExchangeDocument>,
  ) {
    super(exchangeService);
  }
}
