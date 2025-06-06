import config from '@app/config/config';
import { Card } from '@app/model/schema/card.schema';
import { CardModule } from '@app/module/card.module';
import { MongoModule } from '@app/module/mongo.module';
import { CacheModule } from '@nestjs/cache-manager';
import { INestApplication } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import request from 'supertest';
import { App } from 'supertest/types';

describe('CardController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot({ load: [config] }),
        CacheModule.register({ isGlobal: true, ttl: 0 }),
        MongoModule,
        CardModule,
      ],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => await app.close());

  it('/cards (GET)', () => {
    return request(app.getHttpServer() as unknown as App)
      .get('/cards')
      .expect(200)
      .expect((body) => Array.isArray(body) && body[0] instanceof Card);
  });

  it('/cards/{id} (GET)', () => {
    return request(app.getHttpServer() as unknown as App)
      .get('/cards/617e13e0865f0a80c9b3f92e')
      .expect(200)
      .expect((body) => body instanceof Card);
  });
});
