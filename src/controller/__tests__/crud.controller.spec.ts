/* eslint-disable @typescript-eslint/ban-ts-comment */
import mockCardList from '@app/__mocks__/cardList.json';
import { HeaderGuard } from '@app/guard/auth.guard';
import { CacheService } from '@app/service/cache.service';
import { CardService } from '@app/service/card.service';
import { CanActivate, ExecutionContext } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { Observable } from 'rxjs';
import { CardController } from '../card.controller';

describe('CRUD Controller test suite', () => {
  const APP_ID = '1';
  class MockHeaderGuard implements CanActivate {
    canActivate(
      context: ExecutionContext,
    ): boolean | Promise<boolean> | Observable<boolean> {
      return !!context ?? true;
    }
  }
  const models = [
    {
      name: 'Card',
      controller: CardController,
      service: CardService,
      request: {
        name: mockCardList[0].name,
        number: 0,
        exchangeable: false,
      },
      all: mockCardList,
    },
  ];

  models.forEach((databaseModel) => {
    describe(`CRUD ${databaseModel.controller.name} test suite`, () => {
      type dbServiceType = typeof databaseModel.service;
      const mockOne = databaseModel.all[0];
      let controller: unknown;
      let service: dbServiceType;

      beforeEach(async () => {
        const app: TestingModule = await Test.createTestingModule({
          controllers: [databaseModel.controller],
          providers: [
            {
              provide: databaseModel.service,
              useValue: {
                getKey: jest.fn().mockResolvedValue(databaseModel.name),
                create: jest.fn().mockResolvedValue(mockOne),
                findAll: jest.fn().mockResolvedValue(databaseModel.all),
                findOne: jest.fn().mockResolvedValue(mockOne),
                update: jest.fn().mockResolvedValue(mockOne),
                delete: jest.fn().mockResolvedValue(mockOne),
              },
            },
            {
              provide: CacheService,
              useValue: {
                set: jest.fn(),
                get: jest.fn().mockResolvedValue(undefined),
                deleteAll: jest.fn(),
              },
            },
          ],
        })
          .overrideGuard(HeaderGuard)
          .useClass(MockHeaderGuard)
          .compile();

        controller = app.get(databaseModel.controller);
        service = app.get(databaseModel.service);
      });

      it(`should create a new ${databaseModel.name}`, async () => {
        // @ts-ignore
        await controller.create(databaseModel.request);
        // @ts-ignore
        expect(service.create).toHaveBeenCalledWith(databaseModel.request);
      });

      it(`should return all of ${databaseModel.name}`, async () => {
        // @ts-ignore
        const apps = await controller.findAll(false);
        expect(apps).toEqual(databaseModel.all);
        // @ts-ignore
        expect(service.findAll).toHaveBeenCalled();
      });

      it(`should return single ${databaseModel.name}`, async () => {
        // @ts-ignore
        const app = await controller.findOne(APP_ID, false);
        expect(app).toEqual(mockOne);
        // @ts-ignore
        expect(service.findOne).toHaveBeenCalled();
      });

      it(`should update a ${databaseModel.name}`, async () => {
        // @ts-ignore
        const app = await controller.update(APP_ID, databaseModel.request);
        expect(app).toEqual(mockOne);
        // @ts-ignore
        expect(service.update).toHaveBeenCalled();
      });

      it(`should delete a ${databaseModel.name}`, async () => {
        // @ts-ignore
        await controller.delete(APP_ID);
        // @ts-ignore
        expect(service.delete).toHaveBeenCalled();
      });
    });
  });
});
