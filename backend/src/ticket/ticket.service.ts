import {HttpException, Injectable} from '@nestjs/common';
import {PrismaService} from 'src/Prisma/prisma.service';

@Injectable()
export class TicketService {
  constructor(private readonly prismaService: PrismaService) {}
  async createTicket(orderId: string, passengerEmail: {emailID: string}[]) {
    try {
      const order = await this.prismaService.order.findUnique({
        where: {id: orderId},
        include: {schedule: true},
      });

      if (!order || !order.schedule) {
        throw new Error('Order or schedule not found');
      }

      const schedule = order.schedule;

      const today = new Date();

      const [hours, minutes, seconds] = schedule.departureTime
        .split(':')
        .map(Number);

      const createdAt = new Date(today.setHours(hours, minutes, seconds, 0));

      const ticketCreated = await this.prismaService.ticket.create({
        data: {
          orderId: orderId,
          passengerEmail: passengerEmail.map(passenger => {
            return passenger.emailID;
          }),
          createdAt: createdAt,
        },
      });
      return ticketCreated;
    } catch (err) {
      throw new Error(err.message);
    }
  }

  async getSchedulesByPassengerEmail(email: string) {
    const tickets = await this.prismaService.ticket.findMany({
      where: {
        passengerEmail: {
          has: email,
        },
      },
      include: {
        order: {
          include: {
            schedule: true,
          },
        },
      },
    });

    if (tickets.length === 0) {
      throw new Error('No tickets found for the given email');
    }
    return tickets.map(ticket => ({
      createdAt: ticket.createdAt,
      schedule: ticket.order.schedule,
    }));
  }
}
