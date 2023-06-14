import {Injectable} from '@nestjs/common';
import {PrismaService} from 'src/Prisma/prisma.service';

@Injectable()
export class BusService {
  constructor(private readonly prismaService: PrismaService) {}
  async getBusSchedule() {
    return {
      today: new Date(),
      schedule: await this.prismaService.schedule.findMany({}),
    };
  }
}
