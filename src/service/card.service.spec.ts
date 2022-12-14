import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { Model } from 'mongoose';
import { Card } from '../model/schema/card.schema';
import mockList from '../__mocks__/cardList.json';
import { CardService } from './card.service';

const APP_ID = '1';

describe('CardService test suite', () => {
  const requestData = {
    name: mockList[0].name,
    number: 0,
    exchangeable: false,
  };
  const mockCard = mockList[0];
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
    jest.spyOn(model, 'find').mockResolvedValue(mockList);
    const apps = await service.findAll(false);
    expect(apps).toEqual(mockList);
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
