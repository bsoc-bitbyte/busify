import {Global, Module} from '@nestjs/common';
import {RedisService} from './redis.service';
import {RedisModule} from '@liaoliaots/nestjs-redis';

@Global()
@Module({
  imports: [
    RedisModule.forRoot({
      config: {
        host: 'localhost',
        port: 6379,
        password: 'redispass',
      },
    }),
  ],
  providers: [RedisService],
  exports: [RedisService],
})
export class RedisCustomModule {}
