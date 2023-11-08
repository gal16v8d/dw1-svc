import config from '@app/config/config';
import { MenuController } from '@app/controller/menu.controller';
import { Menu, MenuSchema } from '@app/model/schema/menu.schema';
import { CacheService } from '@app/service/cache.service';
import { MenuService } from '@app/service/menu.service';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
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
