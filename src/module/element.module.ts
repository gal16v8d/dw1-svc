import config from '@app/config/config';
import { ElementController } from '@app/controller/element.controller';
import { Element, ElementSchema } from '@app/model/schema/element.schema';
import { CacheService } from '@app/service/cache.service';
import { ElementService } from '@app/service/element.service';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { FlagServiceModule } from './flag.module';

@Module({
  imports: [
    ConfigModule.forRoot({ load: [config] }),
    FlagServiceModule,
    MongooseModule.forFeature([{ name: Element.name, schema: ElementSchema }]),
  ],
  controllers: [ElementController],
  providers: [ElementService, CacheService],
})
export class ElementModule {}
