import { Test, TestingModule } from '@nestjs/testing';
import { CardController } from './card.controller';
import { CardService } from '../service/card.service';
import { cardArray, mockCard } from '../__mocks__/card.mock';
import { CardDto } from 'src/model/dto/card.dto';

const APP_ID = '1';

describe('Card Controller test suite', () => {
  const requestData: CardDto = {
    name: mockCard.name,
    number: 0,
    exchangeable: false,
  };
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
            findAll: jest.fn().mockResolvedValue(cardArray),
            findOne: jest.fn().mockResolvedValue(mockCard),
            update: jest.fn().mockResolvedValue(mockCard),
            delete: jest.fn().mockResolvedValue(mockCard),
          },
        },
      ],
    }).compile();

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
    expect(apps).toEqual(cardArray);
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
