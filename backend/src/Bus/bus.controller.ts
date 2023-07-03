import {Controller, Get, UseGuards} from '@nestjs/common';
import {BusService} from './bus.service';
import {AdminGuard} from 'src/Auth/utils/admin.guard';
import {JwtAuthGuard} from 'src/Auth/utils/jwt.guard';
import {RedisService} from 'src/Redis/redis.service';
import {EntityId} from 'redis-om';

@Controller('bus')
export class BusController {
  constructor(
    private readonly busService: BusService,
    private readonly redis: RedisService
  ) {}
  @Get('schedule')
  async getBusSchedule() {
    return this.busService.getBusSchedule();
  }

  // testing admin guard
  @UseGuards(JwtAuthGuard, AdminGuard)
  @Get('admin-protected')
  async adminProtected() {
    return 'This is admin protected route';
  }
  // testing redis
  @Get('redis')
  async redisTest() {
    // await this.redis.set('test', 'Hello World');
    const order = await this.redis.setOrder({
      id: '1',
      userId: '1',
      status: 'pending',
    });
    return order[EntityId];
  }
}
