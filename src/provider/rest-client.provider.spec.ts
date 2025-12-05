import config from '@app/config/config';
import { RestClientModule } from '@app/module/rest-client.module';
import { HttpService } from '@nestjs/axios';
import { HttpException, HttpStatus } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { EmptyError, of } from 'rxjs';
import { RestClientProvider } from './rest-client.provider';

describe('RestClientProvider', () => {
  type StatusTestData = {
    status: HttpStatus;
  };
  type ErrorCodeTestData = {
    code: string;
  };
  const okResponse: AxiosResponse<string> = {
    data: 'Ok',
    headers: {},
    config: {} as InternalAxiosRequestConfig,
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

  it.each<ErrorCodeTestData>([{ code: 'ECONNREFUSED' }, { code: 'ENOTFOUND' }])(
    'should return service unavailable if $code',
    async ({ code }) => {
      const error: AxiosError = { ...badResponse, code };
      const mockRestCall = jest
        .spyOn(httpService, 'request')
        .mockImplementationOnce(() => {
          throw error;
        });
      try {
        await provider.get(mockServiceName, mockBaseUrl, {});
      } catch (e: unknown) {
        expect(e).toBeInstanceOf(HttpException);
        expect((e as HttpException).message).toBe(
          `Service ${mockServiceName} is not responding`,
        );
      }
      expect(mockRestCall).toHaveBeenCalled();
    },
  );

  it('should return internal error if unexpected error', async () => {
    const error: AxiosError = { ...badResponse, code: 'EBADGATEWAY' };
    const mockRestCall = jest
      .spyOn(httpService, 'request')
      .mockImplementationOnce(() => {
        throw error;
      });
    try {
      await provider.get(mockServiceName, mockBaseUrl, {});
    } catch (e: unknown) {
      expect(e).toBeInstanceOf(HttpException);
      expect((e as HttpException).message).toBe(
        `Unexpected response from ${mockServiceName}`,
      );
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
    } catch (e: unknown) {
      expect(e).toBeInstanceOf(HttpException);
      expect((e as HttpException).message).toBe(
        `No response from ${mockServiceName}`,
      );
    }
    expect(mockRestCall).toHaveBeenCalled();
  });

  it.each<StatusTestData>([
    { status: HttpStatus.BAD_REQUEST },
    { status: HttpStatus.UNAUTHORIZED },
  ])(
    'should map and re-throw the rest client error - $status',
    async ({ status }) => {
      const badAxiosResponse = {
        data: 'failed',
        headers: {},
        config: {} as InternalAxiosRequestConfig,
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
        expect((e as HttpException).message).toBe('failed');
        expect((e as HttpException).getStatus()).toBe(status);
      }
      expect(mockRestCall).toHaveBeenCalled();
    },
  );
});
