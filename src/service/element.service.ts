import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { NameInputDto } from '../model/dto/name.input.dto';
import { Element, ElementDocument } from '../model/schema/element.schema';
import { GenericService } from './generic.service';

@Injectable()
export class ElementService extends GenericService<Element, NameInputDto> {
  constructor(
    @InjectModel(Element.name)
    private readonly elementModel: Model<ElementDocument>,
  ) {
    super(elementModel);
  }
}
