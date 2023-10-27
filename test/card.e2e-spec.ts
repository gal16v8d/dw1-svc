import { CacheModule } from '@nestjs/cache-manager';
import { INestApplication } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import request from 'supertest';
import config from '../src/config/config';
import { Card } from '../src/model/schema/card.schema';
import { CardModule } from '../src/module/card.module';
import { MongoModule } from '../src/module/mongo.module';

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
    return request(app.getHttpServer())
      .get('/cards')
      .expect(200)
      .expect((body) => Array.isArray(body) && body[0] instanceof Card);
  });

  it('/cards/{id} (GET)', () => {
    return request(app.getHttpServer())
      .get('/cards/617e13e0865f0a80c9b3f92e')
      .expect(200)
      .expect((body) => body instanceof Card);
  });
});
