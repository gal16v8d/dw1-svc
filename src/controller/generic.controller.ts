import { HeaderGuard } from '@app/guard/auth.guard';
import { CacheService } from '@app/service/cache.service';
import { GenericService } from '@app/service/generic.service';
import {
  Body,
  DefaultValuePipe,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Logger,
  NotFoundException,
  Param,
  ParseBoolPipe,
  Post,
  Put,
  Query,
  UseGuards,
} from '@nestjs/common';

/**
 * Include the basic CRUD operations for any controller.
 *
 * @param S schema related data object
 * @param R request data
 */
@UseGuards(HeaderGuard)
export class GenericController<S, R> {
  private readonly logger = new Logger(GenericController.name);

  constructor(
    private readonly service: GenericService<S, R>,
    readonly cache: CacheService,
  ) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() requestData: R) {
    const data = await this.service.create(requestData);
    await this.cache.deleteAll(this.service.getKey());
    return data;
  }

  @Get()
  async find(
    @Query(
      'expanded',
      new DefaultValuePipe(false),
      new ParseBoolPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
    )
    expanded: boolean,
  ): Promise<S[]> {
    return this.findAll(expanded);
  }

  @Get(':id')
  async findOne(
    @Param('id') id: string,
    @Query(
      'expanded',
      new DefaultValuePipe(false),
      new ParseBoolPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
    )
    expanded: boolean,
  ): Promise<S> {
    const key = `${this.service.getKey()}-${id}-${expanded}`;
    const cacheData = await this.cache.get(key);
    if (cacheData) {
      this.logger.debug('findOne from cache', { key, cacheData });
      return cacheData as unknown as S;
    }
    this.logger.debug('findOne not found in cache', key);
    const data = await this.service.findOne(id, expanded);
    this.checkExistence(data);
    await this.cache.set(key, data);
    return data;
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() requestData: R): Promise<S> {
    const data = await this.service.update(id, requestData);
    this.checkExistence(data);
    await this.cache.deleteAll(this.service.getKey());
    return data;
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(@Param('id') id: string) {
    await this.service.delete(id);
    await this.cache.deleteAll(this.service.getKey());
  }

  private checkExistence(data: S) {
    if (!data) {
      throw new NotFoundException();
    }
  }

  private async findAll(expanded: boolean): Promise<S[]> {
    const key = this.service.getKey();
    this.logger.debug(`Cache key is ${key}`);
    const cacheData = await this.cache.get(key);
    if (cacheData) {
      this.logger.debug('findAll from cache', { key, cacheData });
      return cacheData as unknown as S[];
    }
    this.logger.debug('findAll not found in cache', key);
    const data = await this.service.findAll(expanded);
    await this.cache.set(key, data);
    return data;
  }
}
