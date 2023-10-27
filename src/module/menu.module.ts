import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import config from '../config/config';
import { MenuController } from '../controller/menu.controller';
import { Menu, MenuSchema } from '../model/schema/menu.schema';
import { CacheService } from '../service/cache.service';
import { MenuService } from '../service/menu.service';
import { FlagServiceModule } from './flag.module';

@Module({
  imports: [
    ConfigModule.forRoot({ load: [config] }),
    FlagServiceModule,
    MongooseModule.forFeature([{ name: Menu.name, schema: MenuSchema }]),
  ],
  controllers: [MenuController],
  providers: [MenuService, CacheService],
})
export class MenuModule {}
