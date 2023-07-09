import {Injectable, Logger} from '@nestjs/common';
import {createClient} from 'redis';
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
  getClient() {
    return this.client;
  }
}
