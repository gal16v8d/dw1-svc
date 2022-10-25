import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { Model } from 'mongoose';
import { Card } from '../model/schema/card.schema';
import { CardService } from './card.service';
import { cardArray, mockCard } from '../__mocks__/card.mock';

const APP_ID = '1';

describe('CardService test suite', () => {
  const requestData = {
    name: mockCard.name,
    number: 0,
    exchangeable: false,
  };
  const mockModel = {
    new: jest.fn().mockResolvedValue(mockCard),
    constructor: jest.fn().mockResolvedValue(mockCard),
    create: jest.fn(),
    find: jest.fn(),
    findOne: jest.fn(),
    findByIdAndUpdate: jest.fn(),
    findByIdAndRemove: jest.fn(),
    exec: jest.fn(),
  };
  let service: CardService;
  let model: Model<Card>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CardService,
        {
          provide: getModelToken('Card'),
          useValue: mockModel,
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
    jest
      .spyOn(model, 'create')
      .mockImplementationOnce(() => Promise.resolve(mockCard));
    const newApp = await service.create(requestData);
    expect(newApp).toEqual(mockCard);
  });

  it('should return all cards', async () => {
    jest.spyOn(model, 'find').mockResolvedValue(cardArray);
    const apps = await service.findAll(false);
    expect(apps).toEqual(cardArray);
  });

  it('should return single card', async () => {
    jest.spyOn(model, 'findOne').mockResolvedValue(mockCard);
    const app = await service.findOne(APP_ID, false);
    expect(app).toEqual(mockCard);
  });

  it('should update a card', async () => {
    jest.spyOn(model, 'findByIdAndUpdate').mockReturnValue({
      exec: jest.fn().mockResolvedValueOnce(mockCard),
    } as any);
    const app = await service.update(APP_ID, requestData);
    expect(app).toEqual(mockCard);
  });

  it('should delete a card', async () => {
    jest.spyOn(model, 'findByIdAndRemove').mockReturnValue({
      exec: jest.fn().mockResolvedValueOnce(mockCard),
    } as any);
    const app = await service.delete(APP_ID);
    expect(app).toEqual(mockCard);
  });
});
