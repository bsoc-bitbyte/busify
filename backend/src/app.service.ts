import {Injectable} from '@nestjs/common';
import {PrismaService} from './Prisma/prisma.service';

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}
  async getHello(): Promise<any> {
    const user = this.prisma.users.create({
      data: {
        id: 'testId',
        name: 'test',
        email: 'some@gmail.com',
        picture: 'some link',
      },
    });
    return await user;
  }
}
