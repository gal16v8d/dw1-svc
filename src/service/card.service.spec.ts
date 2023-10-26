import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { Model } from 'mongoose';
import mockList from '../__mocks__/cardList.json';
import { Card } from '../model/schema/card.schema';
import { CardService } from './card.service';

const APP_ID = '1';

// This one should be covered by crud.service.spec.ts
// but keeping it in case a rollback is needed
describe('CardService test suite', () => {
  const requestData = {
    name: mockList[0].name,
    number: 0,
    exchangeable: false,
  };
  const mockCard = mockList[0];
  let service: CardService;
  let model: Model<Card>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CardService,
        {
          provide: getModelToken('Card'),
          useValue: {
            new: jest.fn().mockResolvedValue(mockCard),
            constructor: jest.fn().mockResolvedValue(mockCard),
            create: jest.fn().mockResolvedValue(mockCard),
            find: jest.fn().mockResolvedValue(mockList),
            findOne: jest.fn().mockResolvedValue(mockCard),
            findByIdAndUpdate: jest.fn().mockReturnValue({
              exec: jest.fn().mockResolvedValueOnce(mockCard),
            } as any),
            findByIdAndRemove: jest.fn().mockReturnValue({
              exec: jest.fn().mockResolvedValueOnce(mockCard),
            } as any),
            exec: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<CardService>(CardService);
    model = module.get<Model<Card>>(getModelToken('Card'));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should insert a new card', async () => {
    const newApp = await service.create(requestData);
    expect(newApp).toEqual(mockCard);
    expect(model.create).toHaveBeenCalled();
  });

  it('should return all cards', async () => {
    const apps = await service.findAll(false);
    expect(apps).toEqual(mockList);
    expect(model.find).toHaveBeenCalled();
  });

  it('should return single card', async () => {
    const app = await service.findOne(APP_ID, false);
    expect(app).toEqual(mockCard);
    expect(model.findOne).toHaveBeenCalled();
  });

  it('should update a card', async () => {
    const app = await service.update(APP_ID, requestData);
    expect(app).toEqual(mockCard);
    expect(model.findByIdAndUpdate).toHaveBeenCalled();
  });

  it('should delete a card', async () => {
    const app = await service.delete(APP_ID);
    expect(app).toEqual(mockCard);
    expect(model.findByIdAndRemove).toHaveBeenCalled();
  });
});
