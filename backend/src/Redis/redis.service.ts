import {Injectable, Logger} from '@nestjs/common';
import {Repository} from 'redis-om';
import {createClient} from 'redis';
import {orderSchema} from './schema';

@Injectable()
export class RedisService {
  private readonly logger = new Logger(RedisService.name);
  private readonly client = createClient({
    socket: {
      host: 'localhost',
      port: 6379,
    },
    password: process.env.REDIS_PASSWORD,
  });
  constructor() {}
  async onModuleInit() {
    if (!process.env.REDIS_PASSWORD) {
      this.logger.error('REDIS_PASSWORD is not set');
      return;
    }
    try {
      await this.client.connect();
      this.logger.log('Redis connected');
    } catch (error) {
      this.logger.error(error);
    }
  }
  async get(key: string) {
    return this.client.get(key);
  }
  async set(key: string, value: string) {
    return this.client.set(key, value);
  }
  async setOrder(order: any) {
    const orderRepo = new Repository(orderSchema, this.client);
    return await orderRepo.save(order.id, order);
  }
}
