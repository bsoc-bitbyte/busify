import {HttpException, Injectable} from '@nestjs/common';
import {PrismaService} from 'src/Prisma/prisma.service';
import {ec as EC} from 'elliptic';
import * as CryptoJS from 'crypto-js';

const ec = new EC('secp256k1');

@Injectable()
export class TicketScannerService {
  constructor(private readonly prismaService: PrismaService) {}

  async scanTicket(encryptedData: string, userId: string) {
    try {
      const ticket = await this.prismaService.ticket.findFirst({
        where: {
          encryptedData: encryptedData,
        },
      });

      if (!ticket) {
        throw new Error('Ticket not found');
      }

      const result = await this.decryptTicket(encryptedData, userId);

      return result;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async decryptTicket(encryptedData: string, userId: string) {
    const user = await this.prismaService.users.findFirst({
      where: {
        id: userId,
        role: 'admin',
      },
    });

    if (!user) {
      throw new Error('Your role should be Admin to continue');
    }

    const decryptedData = this.decrypt(encryptedData, process.env.PRIVATE_KEY);
    const {orderId, emails} = JSON.parse(decryptedData);

    return {orderId, emails};
  }

  decrypt(encryptedMessage: string, secretKey: string): string {
    const bytes = CryptoJS.AES.decrypt(encryptedMessage, secretKey);
    return bytes.toString(CryptoJS.enc.Utf8);
  }
}
