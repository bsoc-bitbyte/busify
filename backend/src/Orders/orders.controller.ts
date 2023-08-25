import {Controller, Get, Post, Req} from '@nestjs/common';
import {OrdersService} from './orders.service';
// eslint-disable-next-line node/no-extraneous-import
import {Request} from 'express';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}
  @Post('create')
  async createOrder(@Req() req: Request) {
    return await this.ordersService.createOrder(req);
  }
}
