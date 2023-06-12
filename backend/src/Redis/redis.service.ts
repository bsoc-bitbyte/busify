import {Injectable, Logger} from '@nestjs/common';
import {InjectRedis} from '@liaoliaots/nestjs-redis';
import Redis from 'ioredis';
@Injectable()
export class RedisService {
  private readonly logger = new Logger(RedisService.name);
  constructor(@InjectRedis() private readonly redis: Redis) {}
  async onModuleInit() {
    await this.redis.ping((err, result) =>
      this.logger.log(`Redis ping result: ${result}`)
    );
  }
  async set(key: string, value: string, expire?: number) {
    if (expire) {
      return await this.redis.setex(key, expire, value);
    } else {
      return await this.redis.set(key, value);
    }
  }
  async get(key: string) {
    return await this.redis.get(key);
  }
  async del(key: string) {
    return await this.redis.del(key);
  }
  async exists(key: string) {
    return await this.redis.exists(key);
  }
}
