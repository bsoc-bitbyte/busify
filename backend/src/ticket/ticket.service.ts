import {HttpException, Injectable} from '@nestjs/common';
import {PrismaService} from 'src/Prisma/prisma.service';
import * as CryptoJS from 'crypto-js';

@Injectable()
export class TicketService {
  constructor(private readonly prismaService: PrismaService) {}
  async createTicket(orderId: string, passengerEmail: {emailID: string}[]) {
    try {
      const encryptedData = this.generateToken(
        orderId,
        passengerEmail.map(data => data.emailID)
      );
      const ticketCreated = await this.prismaService.ticket.create({
        data: {
          orderId: orderId,
          passengerEmail: passengerEmail.map(passenger => {
            return passenger.emailID;
          }),
          encryptedData: encryptedData,
        },
      });
      return ticketCreated;
    } catch (err) {
      throw new Error(err.message);
    }
  }

  generateToken(orderId: string, emails: string[]) {
    const message: string = JSON.stringify({orderId, emails});
    return this.encrypt(message, process.env.PRIVATE_KEY);
  }

  encrypt(message: string, secretKey: string): string {
    return CryptoJS.AES.encrypt(message, secretKey).toString();
  }
}
