import { CardDto } from '@app/model/dto/card.dto';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Card, CardDocument } from '../model/schema/card.schema';
import { GenericService } from './generic.service';

@Injectable()
export class CardService extends GenericService<Card, CardDto> {
  constructor(@InjectModel(Card.name) readonly cardModel: Model<CardDocument>) {
    super(cardModel);
  }
}
