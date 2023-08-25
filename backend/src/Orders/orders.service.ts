import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
// eslint-disable-next-line node/no-extraneous-import
import {Request} from 'express';
import {PrismaService} from 'src/Prisma/prisma.service';
import {RazorpayService} from 'src/Razorpay/razorpay.service';
import {RedisService} from 'src/Redis/redis.service';
import {orderDto} from './dto';

@Injectable()
export class OrdersService {
  constructor(
    private readonly prismService: PrismaService,
    private readonly redisService: RedisService,
    private readonly razorpayService: RazorpayService
  ) {}
  async createOrder(req: Request) {
    const data = req.body;
    const ticketPrice = await this.prismService.schedule.findFirst({
      where: {
        id: data.scheduleId,
      },
      select: {
        ticketPrice: true,
      },
    });
    const amount = Math.ceil((Number(ticketPrice.ticketPrice) * 2) / 100);
    const actualAmount =
      (ticketPrice.ticketPrice + amount) * data.totalPassengers;
    if (actualAmount !== Number(data.amount)) {
      // TODO: throw error
      return new HttpException('Amount mismatch', HttpStatus.BAD_REQUEST);
    } else {
      const razorpayOrder = await this.razorpayService.createOrder(data.amount); // TODO: match the amount with the schedule amount
      const order: orderDto = {
        id: razorpayOrder.id,
        userId: data.userId,
        scheduleId: data.scheduleId,
        amount: Number(razorpayOrder.amount),
        status: razorpayOrder.status,
        receipt: razorpayOrder.receipt,
        noOfTickets: data.noOFtickets,
        passengerDetails: data.passengerDetails,
      };
      // save the order in the database
      await this.prismService.order.create({
        data: order,
      });
      // save the order in the redis for 12 minutes
      await this.redisService
        .getClient()
        .setEx(razorpayOrder.id, 60 * 12, JSON.stringify(order));

      return order;
    }
  }
}
