import {JwtAuthGuard} from 'src/Auth/utils/jwt.guard';
import {TicketService} from './ticket.service';
import {
  Controller,
  Get,
  Post,
  Query,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import {Request} from 'src/types';
@Controller('ticket')
export class TicketController {
  constructor(private readonly TicketService: TicketService) {}
  @UseGuards(JwtAuthGuard)
  @Post('/create')
  async createTicket(@Req() req: Request) {
    try {
      return this.TicketService.createTicket(
        req.body.orderId,
        req.body.passengerEmail
      );
    } catch (err) {
      throw new Error(err);
    }
  }
  @UseGuards(JwtAuthGuard)
  @Get('/by-passenger-email')
  async getSchedulesByPassengerEmail(@Query('email') email: string) {
    return this.TicketService.getSchedulesByPassengerEmail(email);
  }
}
