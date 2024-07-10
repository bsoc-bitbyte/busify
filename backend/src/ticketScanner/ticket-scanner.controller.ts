import {Controller, Post, Body, Request, UseGuards} from '@nestjs/common';
import {TicketScannerService} from './ticket-scanner.service';
import {JwtAuthGuard} from 'src/Auth/utils/jwt.guard';

@Controller('ticket-scanner')
export class TicketScannerController {
  constructor(private readonly ticketScannerService: TicketScannerService) {}

  @UseGuards(JwtAuthGuard)
  @Post('scan')
  async scanTicket(
    @Body('encryptedData') encryptedData: string,
    @Request() req: any
  ) {
    const userId = req.user.id;
    return this.ticketScannerService.scanTicket(encryptedData, userId);
  }
}
