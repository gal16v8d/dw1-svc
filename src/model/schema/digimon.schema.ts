import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { CONSTANTS } from '../../const/dw1.const';
import ActiveEnum from '../enum/active.enum';
import TypeEnum from '../enum/type.enum';
import { Item } from './item.schema';
import { Level } from './level.schema';
import { Location } from './location.schema';
import { Tech } from './tech.schema';

// TODO change required fields when I get more data in the game
@Schema({ collection: CONSTANTS.DB.DIGIMON })
export class Digimon {
  @Prop({ type: String, required: true, unique: true })
  name: string;
  @Prop({ type: Types.ObjectId, required: true, ref: Level.name })
  level: Level;
  @Prop({ type: String, required: false, enum: Object.values(TypeEnum) })
  type?: string;
  @Prop({ type: String, required: false, enum: Object.values(ActiveEnum) })
  active?: string;
  @Prop({ type: Types.ObjectId, required: false, ref: Tech.name })
  techInitial?: Tech;
  @Prop({ type: Types.ObjectId, required: false, ref: Tech.name })
  techFinal?: Tech;
  @Prop({
    type: [Types.ObjectId],
    required: true,
    ref: Tech.name,
    justOne: false,
  })
  tech: Tech[];
  @Prop({
    type: [Types.ObjectId],
    required: false,
    ref: Location.name,
    justOne: false,
  })
  locationHappy?: Location[];
  @Prop({
    type: [Types.ObjectId],
    required: false,
    ref: Location.name,
    justOne: false,
  })
  locationSad?: Location[];
  @Prop({ type: Boolean, default: false, required: true })
  raisable: boolean;
  @Prop({ type: Boolean, default: false, required: true })
  recruitable: boolean;
  @Prop({ type: Types.ObjectId, required: false, ref: Item.name })
  itemDrop?: Item;
}

export type DigimonDocument = Digimon & Document;
export const DigimonSchema = SchemaFactory.createForClass(Digimon);
