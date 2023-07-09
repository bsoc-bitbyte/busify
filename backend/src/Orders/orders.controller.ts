import {Controller, Get, Req} from '@nestjs/common';
import {OrdersService} from './orders.service';
// eslint-disable-next-line node/no-extraneous-import
import {Request} from 'express';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}
  @Get('inventory/:scheduleId')
  async getTicketInventory(@Req() req: Request) {
    return await this.ordersService.getTicketInventory(req);
  }
}
