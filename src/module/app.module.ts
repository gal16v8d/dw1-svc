import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { MongooseModule } from '@nestjs/mongoose';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import config from '../config/config';
import { ReadMiddleware } from '../middleware/read.middleware';
import { CardModule } from './card.module';
import { DigimonModule } from './digimon.module';
import { ElementModule } from './element.module';
import { ExchangeModule } from './exchange.module';
import { GymMachineModule } from './gym-machine.module';
import { HealthModule } from './health.module';
import { ItemModule } from './item.module';
import { LevelModule } from './level.module';
import { LocationModule } from './location.module';
import { MachineModule } from './machine.module';
import { MedalModule } from './medal.module';
import { MenuModule } from './menu.module';
import { MeritPointModule } from './merit-point.module';
import { RecruitModule } from './recruit.module';
import { RestaurantFoodModule } from './restaurant-food.module';
import { RestaurantModule } from './restaurant.module';
import { StatusModule } from './status.module';
import { TechModule } from './tech.module';

@Module({
  imports: [
    ConfigModule.forRoot({ load: [config] }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('server.dbUrl'),
      }),
      inject: [ConfigService],
    }),
    ThrottlerModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        ttl: config.get('server.throttleTtl'),
        limit: config.get('server.throttleLimit'),
      }),
    }),
    HealthModule,
    CardModule,
    DigimonModule,
    ElementModule,
    ExchangeModule,
    GymMachineModule,
    ItemModule,
    LevelModule,
    LocationModule,
    MachineModule,
    MedalModule,
    MenuModule,
    MeritPointModule,
    RecruitModule,
    RestaurantModule,
    RestaurantFoodModule,
    StatusModule,
    TechModule,
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ReadMiddleware).forRoutes('/');
  }
}
