import {Injectable, Logger} from '@nestjs/common';
import {Repository} from 'redis-om';
import {createClient} from 'redis';
import {orderSchema} from './schema';

@Injectable()
export class RedisService {
  private readonly logger = new Logger(RedisService.name);
  private readonly client = createClient({
    url: process.env.REDIS_URL,
  });
  constructor() {}
  async onModuleInit() {
    try {
      await this.client.connect();
      this.logger.log('Redis connected');
    } catch (error) {
      this.logger.error(error);
    }
  }
  getClient() {
    return this.client;
  }
}
