import { HttpService } from '@nestjs/axios';
import { HttpException, HttpStatus } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import { AxiosError, AxiosResponse } from 'axios';
import { EmptyError, of } from 'rxjs';
import config from '../config/config';
import { RestClientModule } from '../module/rest-client.module';
import { RestClientProvider } from './rest-client.provider';

describe('RestClientProvider', () => {
  const okResponse: AxiosResponse<string> = {
    data: 'Ok',
    headers: {},
    config: undefined,
    status: HttpStatus.OK,
    statusText: 'Ok',
  };
  const badResponse: AxiosError = {
    isAxiosError: true,
    toJSON: () => {
      return {};
    },
    name: '',
    message: '',
  };
  const mockBaseUrl = 'http://localhost:8080/api';
  const mockServiceName = 'flag-svc';
  let provider: RestClientProvider;
  let httpService: HttpService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [RestClientModule, ConfigModule.forRoot({ load: [config] })],
    }).compile();
    provider = module.get<RestClientProvider>(RestClientProvider);
    httpService = module.get(HttpService);
  });

  it('provider should be defined', () => {
    expect(provider).toBeDefined();
  });

  it('should consume a GET service with no issues', async () => {
    const mockRestCall = jest
      .spyOn(httpService, 'request')
      .mockImplementationOnce(() => of(okResponse));
    const response = await provider.get(mockServiceName, mockBaseUrl, {});
    expect(response).toEqual({ data: 'Ok', status: HttpStatus.OK });
    expect(mockRestCall).toHaveBeenCalled();
  });

  it('should return service unavailable if ECONNREFUSED', async () => {
    const error: AxiosError = { ...badResponse, code: 'ECONNREFUSED' };
    const mockRestCall = jest
      .spyOn(httpService, 'request')
      .mockImplementationOnce(() => {
        throw error;
      });
    try {
      await provider.get(mockServiceName, mockBaseUrl, {});
    } catch (e) {
      expect(e.message).toBe(`Service ${mockServiceName} is not responding`);
    }
    expect(mockRestCall).toHaveBeenCalled();
  });

  it('should return internal error if unexpected error', async () => {
    const error: AxiosError = { ...badResponse, code: 'ENOTFOUND' };
    const mockRestCall = jest
      .spyOn(httpService, 'request')
      .mockImplementationOnce(() => {
        throw error;
      });
    try {
      await provider.get(mockServiceName, mockBaseUrl, {});
    } catch (e) {
      expect(e.message).toBe(`Unexpected response from ${mockServiceName}`);
    }
    expect(mockRestCall).toHaveBeenCalled();
  });

  it('should return internal error if EmptyError', async () => {
    const mockRestCall = jest
      .spyOn(httpService, 'request')
      .mockImplementationOnce(() => {
        throw new EmptyError();
      });
    try {
      await provider.get(mockServiceName, mockBaseUrl, {});
    } catch (e) {
      expect(e.message).toBe(`No response from ${mockServiceName}`);
    }
    expect(mockRestCall).toHaveBeenCalled();
  });

  it.each`
    status
    ${HttpStatus.BAD_REQUEST}
    ${HttpStatus.UNAUTHORIZED}
  `(
    'should map and re-throw the rest client error - $status',
    async ({ status }) => {
      const badAxiosResponse = {
        data: 'failed',
        headers: {},
        config: undefined,
        status,
        statusText: 'failed',
      };
      const error: AxiosError = { ...badResponse, response: badAxiosResponse };
      const mockRestCall = jest
        .spyOn(httpService, 'request')
        .mockImplementationOnce(() => {
          throw error;
        });
      try {
        await provider.get(mockServiceName, mockBaseUrl, {});
      } catch (e) {
        expect(e).toBeInstanceOf(HttpException);
        expect(e.message).toBe('failed');
        expect(e.status).toBe(status);
      }
      expect(mockRestCall).toHaveBeenCalled();
    },
  );
});
