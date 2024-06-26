import {Injectable} from '@nestjs/common';
import {PrismaService} from 'src/Prisma/prisma.service';

@Injectable()
export class TicketService {
  constructor(private readonly prismaService: PrismaService) {}
  async createTicket(orderId: string, passengerEmail: {emailID: string}[]) {
    try {
      const ticketCreated = await this.prismaService.ticket.create({
        data: {
          orderId: orderId,
          passengerEmail: passengerEmail.map(passenger => {
            return passenger.emailID;
          }),
        },
      });
      return ticketCreated;
    } catch (err) {
      throw new Error(err.message);
    }
  }
}
