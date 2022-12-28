import { CanActivate, ExecutionContext } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { Observable } from 'rxjs';
import { HeaderGuard } from '../guard/auth.guard';
import { CardDto } from '../model/dto/card.dto';
import { CardService } from '../service/card.service';
import mockList from '../__mocks__/cardList.json';
import { CardController } from './card.controller';

const APP_ID = '1';

describe('Card Controller test suite', () => {
  class MockHeaderGuard implements CanActivate {
    canActivate(
      context: ExecutionContext,
    ): boolean | Promise<boolean> | Observable<boolean> {
      return !!context ?? true;
    }
  }
  const requestData: CardDto = {
    name: mockList[0].name,
    number: 0,
    exchangeable: false,
  };
  const mockCard = mockList[0];
  let controller: CardController;
  let service: CardService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [CardController],
      providers: [
        {
          provide: CardService,
          useValue: {
            create: jest.fn().mockResolvedValue(mockCard),
            findAll: jest.fn().mockResolvedValue(mockList),
            findOne: jest.fn().mockResolvedValue(mockCard),
            update: jest.fn().mockResolvedValue(mockCard),
            delete: jest.fn().mockResolvedValue(mockCard),
          },
        },
      ],
    })
      .overrideGuard(HeaderGuard)
      .useClass(MockHeaderGuard)
      .compile();

    controller = app.get<CardController>(CardController);
    service = app.get<CardService>(CardService);
  });

  it('should create a new card', async () => {
    const createSpy = jest
      .spyOn(service, 'create')
      .mockResolvedValueOnce(mockCard);
    await controller.create(requestData);
    expect(createSpy).toHaveBeenCalledWith(requestData);
  });

  it('should return all cards', async () => {
    const apps = await controller.findAll(false);
    expect(apps).toEqual(mockList);
  });

  it('should return single card', async () => {
    const app = await controller.findOne(APP_ID, false);
    expect(app).toEqual(mockCard);
  });

  it('should update a card', async () => {
    const app = await controller.update(APP_ID, requestData);
    expect(app).toEqual(mockCard);
  });

  it('should delete a card', async () => {
    const app = await controller.delete(APP_ID);
    expect(app).toEqual(mockCard);
  });
});
