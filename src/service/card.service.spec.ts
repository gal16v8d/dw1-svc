/* eslint-disable @typescript-eslint/unbound-method */
import mockList from '@app/__mocks__/cardList.json';
import { Card } from '@app/model/schema/card.schema';
import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { Model } from 'mongoose';
import { CardService } from './card.service';

const ID = '1';

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
            findByIdAndDelete: jest.fn().mockReturnValue({
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
    const data = await service.create(requestData);
    expect(data).toEqual(mockCard);
    expect(model.create).toHaveBeenCalled();
  });

  it('should return all cards', async () => {
    const data = await service.findAll();
    expect(data).toEqual(mockList);
    expect(model.find).toHaveBeenCalled();
  });

  it('should return all cards expanded', async () => {
    const data = await service.findAllExpanded();
    expect(model.find).toHaveBeenCalled();
    expect(data).toBeDefined();
    expect(data).toBeInstanceOf(Array);
  });

  it('should return single card', async () => {
    const data = await service.findOne(ID);
    expect(data).toEqual(mockCard);
    expect(model.findOne).toHaveBeenCalled();
  });

  it('should return single card expanded', async () => {
    const data = await service.findOneExpanded(ID);
    expect(data).toEqual(mockCard);
    expect(model.findOne).toHaveBeenCalled();
  });

  it('should update a card', async () => {
    const data = await service.update(ID, requestData);
    expect(data).toEqual(mockCard);
    expect(model.findByIdAndUpdate).toHaveBeenCalled();
  });

  it('should delete a card', async () => {
    await service.delete(ID);
    expect(model.findByIdAndDelete).toHaveBeenCalled();
  });
});
