import {HttpException, Injectable} from '@nestjs/common';
import {PrismaService} from 'src/Prisma/prisma.service';
import {v4 as uuidv4} from 'uuid';

@Injectable()
export class BusService {
  constructor(private readonly prismaService: PrismaService) {}
  async getBusSchedule() {
    return {
      today: new Date(),
      schedule: await this.prismaService.schedule.findMany({}),
    };
  }

  async createBus(bus: any) {
    try {
      const busData = await this.prismaService.bus.findFirst({
        where: {
          number: bus.number,
        },
      });
      if (busData) {
        throw new HttpException('Bus already exists', 400);
      } else {
        return this.prismaService.bus.create({
          data: {
            ...bus,
          },
        });
      }
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }
  async getConductors() {
    return this.prismaService.conductor.findMany({});
  }
  async getConductorById(conductorId: string) {
    const conductor = await this.prismaService.conductor.findFirst({
      where: {
        id: conductorId,
      },
    });
    if (!conductor) {
      throw new HttpException('Conductor not found', 404);
    }
    return conductor;
  }
  async getContractors() {
    return this.prismaService.contractor.findMany({});
  }
  async getContractorById(contractorId: string) {
    const contractor = await this.prismaService.contractor.findFirst({
      where: {
        id: contractorId,
      },
    });
    if (!contractor) {
      throw new HttpException('Conductor not found', 404);
    }
    return contractor;
  }
  async createContractor(contractor: any) {
    return this.prismaService.contractor.create({
      data: {
        ...contractor,
        id: uuidv4(),
      },
    });
  }

  async removeContractor(contractorId: string) {
    return this.prismaService.contractor.delete({
      where: {
        id: contractorId,
      },
    });
  }
  async createConductor(conductor: any) {
    return this.prismaService.conductor.create({
      data: {
        ...conductor,
        id: uuidv4(),
      },
    });
  }

  async removeConductor(conductorId: string) {
    return this.prismaService.conductor.delete({
      where: {
        id: conductorId,
      },
    });
  }

  async createSchedule(schedule: any) {
    return this.prismaService.schedule.create({
      data: {
        ...schedule,
      },
    });
  }
  async getBookedTickets() {}
}
