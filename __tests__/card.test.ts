import request from 'supertest';
import config from '../src/config/app.config';
import constants from '../src/constant/constant';
import cardModel from '../src/model/card';
import server from '../src/server';
import cardsMock from './__mocks__/cards.json';

const apiCaller = request(server);

const ID = '617e13e0865f0a80c9b3f92e';
const BACKEND_ERROR = 'Backend error';

describe('Cards test suite', () => {
  test('cards getAll test', async () => {
    const mockCardResponse = jest.fn((): any => Promise.resolve(cardsMock));
    jest.spyOn(cardModel, 'find').mockImplementation(() => mockCardResponse());
    const response = await apiCaller.get(
      `/${config.server.basePath}/${constants.DB.CARD}s`
    );
    expect(response.status).toBe(200);
    expect(response.body).toHaveLength(10);
  });

  test('cards getById test', async () => {
    const mockCardResponse = jest.fn((): any => Promise.resolve(cardsMock[0]));
    jest
      .spyOn(cardModel, 'findById')
      .mockImplementation(() => mockCardResponse());
    const response = await apiCaller.get(
      `/${config.server.basePath}/${constants.DB.CARD}s/${ID}`
    );
    expect(response.status).toBe(200);
    expect(response.body).toMatchObject({
      _id: '617e13e0865f0a80c9b3f92e',
      number: 0,
      name: 'You',
      exchangeable: false,
    });
  });

  test('cards getById not found test', async () => {
    const mockCardResponse = jest.fn((): any => Promise.resolve(null));
    jest
      .spyOn(cardModel, 'findById')
      .mockImplementation(() => mockCardResponse());
    const response = await apiCaller.get(
      `/${config.server.basePath}/${constants.DB.CARD}s/${ID}`
    );
    expect(response.status).toBe(404);
    expect(response.body).toEqual({
      message: `Couldn't find any ${constants.DB.CARD} with id ${ID}`,
    });
  });

  test('cards getById server error test', async () => {
    const mockCardResponse = jest
      .fn()
      .mockRejectedValue(new Error(BACKEND_ERROR));
    jest
      .spyOn(cardModel, 'findById')
      .mockImplementation(() => mockCardResponse());
    const response = await apiCaller.get(
      `/${config.server.basePath}/${constants.DB.CARD}s/${ID}`
    );
    expect(response.status).toBe(500);
    expect(response.body).toHaveProperty('message');
  });

  test('cards save test', async () => {
    const mockCardResponse = jest.fn((): any => Promise.resolve(cardsMock[0]));
    jest
      .spyOn(cardModel, 'create')
      .mockImplementation(() => mockCardResponse());
    const response = await apiCaller
      .post(`/${config.server.basePath}/${constants.DB.CARD}s`)
      .send({
        number: 0,
        name: 'You',
        exchangeable: false,
      });
    expect(response.status).toBe(201);
    expect(response.body).toEqual({
      message: `'You' stored successfully with id: 617e13e0865f0a80c9b3f92e`,
    });
  });

  test('cards save server error test', async () => {
    const mockCardResponse = jest
      .fn()
      .mockRejectedValue(new Error(BACKEND_ERROR));
    jest
      .spyOn(cardModel, 'create')
      .mockImplementation(() => mockCardResponse());
    const response = await apiCaller
      .post(`/${config.server.basePath}/${constants.DB.CARD}s`)
      .send({
        number: 0,
        name: 'You',
        exchangeable: false,
      });
    expect(response.status).toBe(500);
    expect(response.body).toHaveProperty('message');
  });

  test('cards update test', async () => {
    const mockCardResponse = jest.fn((): any => Promise.resolve(cardsMock[0]));
    jest
      .spyOn(cardModel, 'findByIdAndUpdate')
      .mockImplementation(() => mockCardResponse());
    const response = await apiCaller
      .put(`/${config.server.basePath}/${constants.DB.CARD}s/${ID}`)
      .send({
        number: 0,
        name: 'You',
        exchangeable: false,
      });
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ message: `${ID} updated successfully` });
  });

  test('cards update server error test', async () => {
    const mockCardResponse = jest
      .fn()
      .mockRejectedValue(new Error(BACKEND_ERROR));
    jest
      .spyOn(cardModel, 'findByIdAndUpdate')
      .mockImplementation(() => mockCardResponse());
    const response = await apiCaller
      .put(`/${config.server.basePath}/${constants.DB.CARD}s/${ID}`)
      .send({
        number: 0,
        name: 'You',
        exchangeable: false,
      });
    expect(response.status).toBe(500);
    expect(response.body).toHaveProperty('message');
  });

  test('cards delete test', async () => {
    const mockCardResponse = jest.fn((): any => Promise.resolve(cardsMock[0]));
    jest
      .spyOn(cardModel, 'findByIdAndRemove')
      .mockImplementation(() => mockCardResponse());
    const response = await apiCaller.delete(
      `/${config.server.basePath}/${constants.DB.CARD}s/${ID}`
    );
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ message: `${ID} deleted successfully` });
  });

  test('cards delete server error test', async () => {
    const mockCardResponse = jest
      .fn()
      .mockRejectedValue(new Error(BACKEND_ERROR));
    jest
      .spyOn(cardModel, 'findByIdAndRemove')
      .mockImplementation(() => mockCardResponse());
    const response = await apiCaller.delete(
      `/${config.server.basePath}/${constants.DB.CARD}s/${ID}`
    );
    expect(response.status).toBe(500);
    expect(response.body).toHaveProperty('message');
  });
});
