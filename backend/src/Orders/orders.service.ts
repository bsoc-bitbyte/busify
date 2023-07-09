import {HttpException, Injectable} from '@nestjs/common';
// eslint-disable-next-line node/no-extraneous-import
import {Request} from 'express';
import {PrismaService} from 'src/Prisma/prisma.service';
import {RedisService} from 'src/Redis/redis.service';

@Injectable()
export class OrdersService {
  constructor(
    private readonly prismService: PrismaService,
    private readonly redisService: RedisService
  ) {}
  getTicketInventory(req: Request) {
    const {scheduleId} = req.params;
    this.createOrder(scheduleId);
    return this.redisService.getClient().get(`inventory_${scheduleId}`);
  }
  async createOrder(scheduleId: string) {
    const redisClient = this.redisService.getClient();
    await redisClient.executeIsolated(async isolatedClient => {
      const transaction = isolatedClient.multi();
      transaction.get(`inventory_${scheduleId}`);
      transaction.decr(`inventory_${scheduleId}`);
      const [availableSeats, _] = await transaction.exec();
      if (Number(availableSeats) <= 5) {
        throw new HttpException('Not enough seats available', 400);
      }
    });
  }
}
