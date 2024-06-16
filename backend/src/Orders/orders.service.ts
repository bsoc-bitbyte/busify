import {HttpException, Injectable} from '@nestjs/common';
// eslint-disable-next-line node/no-extraneous-import
import {PrismaService} from 'src/Prisma/prisma.service';
import {RazorpayService} from 'src/Razorpay/razorpay.service';
import {RedisService} from 'src/Redis/redis.service';
import {v4 as uuid} from 'uuid';

const PAYMENT_CAPTURE = 1;

type RazorpayOrder = {
  id: string;
  entity: string;
  amount: number;
  amount_paid: number;
  amount_due: number;
  currency: string;
  receipt: string;
  offer_id: any;
  status: string;
  attempts: number;
  notes: any[];
  created_at: string;
};

@Injectable()
export class OrdersService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly redisService: RedisService,
    private readonly razorpayService: RazorpayService
  ) {}

  async createOrder(
    scheduleId: string,
    ticketQuantity: number,
    userId: string
  ) {
    try {
      const schedule = await this.prismaService.schedule.findUnique({
        where: {id: scheduleId},
      });

      if (!schedule) {
        throw new HttpException('Bus timing does not exists', 500);
      }
      const orderOptions = {
        amount: (
          (schedule.ticketPrice * ticketQuantity +
            Math.ceil(0.02 * (schedule.ticketPrice * ticketQuantity))) *
          100
        ).toString(),
        currency: 'INR',
        receipt: uuid() as string,
        payment_capture: PAYMENT_CAPTURE,
      };
      const razorpay_order: RazorpayOrder =
        await this.razorpayService.createOrder(orderOptions);

      const order = await this.prismaService.order.create({
        data: {
          id: razorpay_order.id,
          amount: razorpay_order.amount / 100,
          receipt: razorpay_order.receipt,
          scheduleId,
          attempts: razorpay_order.attempts,
          createdAt: new Date(razorpay_order.created_at),
          status: razorpay_order.status,
          userId,
        },
      });
      return order;
    } catch (error) {
      throw new HttpException('Error, Please try again', 500);
    }
  }

  async paymentConfirmation() {}

  async getRecentOrders(){
    const today = new Date()
    today.setHours(0,0,0,0)
    const orders = await this.prismaService.order.findMany({
      where: {
        createdAt: {
          gte: today
        },
      },select:{
        id: true,
        scheduleId:true,
        userId: true, 
        amount: true,
        receipt: true,
        createdAt: true
      }
    })

    const schedule = await this.prismaService.schedule.findMany({
      where: {
        OR: [...orders.map(order=>({id: order.scheduleId}))]
      },
      select: {
        id: true, 
        from: true, 
        to: true, 
        departureTime: true,
      }
    })

    const users = await this.prismaService.users.findMany({
      where: {
        OR: [...orders.map(order=>({id: order.scheduleId}))]
      },
      select: {
        id: true,
        name: true,
        email: true
      }
    })

    const tickets = await this.prismaService.ticket.findMany({
      where: {
        OR: [...orders.map(order=>({orderId: order.id}))]
      },
      select: {
        orderId: true,
        passengerEmail: true
      }
    })

  type RecentOrdersProps = {
    orderId: string
    ammount: number
    receipt: string
    buyer: string
    from: string
    to: string
    time: string
    passengers: string[]
    email: string
    createdAt: Date
  }

    const formattedData: RecentOrdersProps[] = orders.map((order)=>({
      orderId: order.id,
      ammount: order.amount,
      receipt: order.receipt,
      buyer: users.find(user=>user.id===order.userId).name,
      from: schedule.find(schedule=>schedule.id===order.scheduleId).from,
      to: schedule.find(schedule=>schedule.id===order.scheduleId).to,
      time: schedule.find(schedule=>schedule.id===order.scheduleId).departureTime,
      passengers: tickets.find(ticket=>ticket.orderId===order.id).passengerEmail,
      email: users.find(user=>user.id===order.userId).email,
      createdAt: order.createdAt
    }))

    return formattedData
  }
}
