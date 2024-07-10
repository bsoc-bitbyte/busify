import {
  Controller,
  Get,
  HttpException,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
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

  @UseGuards(JwtAuthGuard)
  @Get('/recent')
  async getRecentOrders() {
    try {
      const orders = await this.ordersService.getRecentOrders();
      return orders;
    } catch (error) {
      if (error instanceof HttpException) {
        throw new HttpException(error.message, error.getStatus());
      }
    }
  }
}
