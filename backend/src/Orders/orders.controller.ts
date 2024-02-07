import {Controller, Get, Post, Req, UseGuards} from '@nestjs/common';
import {OrdersService} from './orders.service';
// eslint-disable-next-line node/no-extraneous-import
import {JwtAuthGuard} from 'src/Auth/utils/jwt.guard';
import {Request} from 'src/types';
@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}
  @UseGuards(JwtAuthGuard)
  @Post('/create')
  async createOrder(@Req() request: Request) {
    return this.ordersService.createOrder(
      request.body.scheduleId,
      request.body.ticketQuantity,
      request.user.id
    );
  }
}
