import {Injectable} from '@nestjs/common';
import {PrismaService} from 'src/Prisma/prisma.service';

@Injectable()
export class BusService {
  constructor(private readonly prismaService: PrismaService) {}
  getSchedule() {
    return this.prismaService.schedule.findMany({});
  }
}
