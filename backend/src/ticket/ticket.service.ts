import {Injectable} from '@nestjs/common';
import {PrismaService} from 'src/Prisma/prisma.service';
import * as CryptoJS from 'crypto-js';

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
      const encryptedData = this.generateToken(
        orderId,
        passengerEmail.map(data => data.emailID)
      );
      const schedule = order.schedule;
      const departureTime = schedule.departureTime;

      const today = new Date();
      const timeParts = departureTime.match(/(\d+):(\d+)\s*(AM|PM)/i);
      if (!timeParts) {
        throw new Error('Invalid departure time format');
      }

      let hours = parseInt(timeParts[1], 10);
      const minutes = parseInt(timeParts[2], 10);
      const period = timeParts[3].toUpperCase();

      if (period === 'PM' && hours < 12) {
        hours += 12;
      } else if (period === 'AM' && hours === 12) {
        hours = 0;
      }

      const createdAt = new Date(today);
      createdAt.setHours(hours, minutes, 0, 0);

      const ticketCreated = await this.prismaService.ticket.create({
        data: {
          orderId: orderId,
          passengerEmail: passengerEmail.map(passenger => passenger.emailID),
          createdAt: createdAt,
          encryptedData: encryptedData,
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
  generateToken(orderId: string, emails: string[]) {
    const message: string = JSON.stringify({orderId, emails});
    return this.encrypt(message, process.env.PRIVATE_KEY);
  }
  encrypt(message: string, secretKey: string): string {
    return CryptoJS.AES.encrypt(message, secretKey).toString();
  }
}
