import {Module} from '@nestjs/common';
import {TicketController} from './ticket.controller';
import {TicketService} from './ticket.service';

@Module({
  controllers: [TicketController],
  providers: [TicketService],
})
export class TicketModule {}
