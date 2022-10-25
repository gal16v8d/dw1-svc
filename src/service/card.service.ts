import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CardDto } from '../model/dto/card.dto';
import { Card, CardDocument } from '../model/schema/card.schema';
import { GenericService } from './generic.service';

@Injectable()
export class CardService extends GenericService<Card, CardDto> {
  constructor(
    @InjectModel(Card.name) private readonly cardModel: Model<CardDocument>,
  ) {
    super(cardModel);
  }
}
