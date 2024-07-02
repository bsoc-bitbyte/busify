import {Module} from '@nestjs/common';
import {TicketScannerService} from './ticket-scanner.service';
import {TicketScannerController} from './ticket-scanner.controller';
import {PrismaService} from '../prisma/prisma.service'; // Ensure the correct import path

@Module({
  controllers: [TicketScannerController],
  providers: [TicketScannerService, PrismaService],
})
export class TicketScannerModule {}
