import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  Param,
  Post,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import {BusService} from './bus.service';
import {AdminGuard} from 'src/Auth/utils/admin.guard';
import {JwtAuthGuard} from 'src/Auth/utils/jwt.guard';
import {RedisService} from 'src/Redis/redis.service';
import {EntityId} from 'redis-om';
import {BusDto, ConductorDto, ContractorDto, ScheduleDto} from './dto';

@Controller('bus')
@UsePipes(ValidationPipe)
export class BusController {
  constructor(
    private readonly busService: BusService,
    private readonly redis: RedisService
  ) {}
  @Get('schedule')
  async getBusSchedule() {
    return this.busService.getBusSchedule();
  }
  @UseGuards(JwtAuthGuard, AdminGuard)
  @Get('booked-tickets')
  async getBookedTickets() {
    return this.busService.getBookedTickets();
  }
  @UseGuards(JwtAuthGuard, AdminGuard)
  @Post('bus')
  async createNewBus(@Body() bus: BusDto) {
    try {
      return this.busService.createBus(bus);
    } catch (error) {
      if (error instanceof HttpException) {
        throw new HttpException(error.message, error.getStatus());
      }
    }
  }
  @UseGuards(JwtAuthGuard, AdminGuard)
  @Get('conductor')
  async getAllConductors() {
    try {
      return this.busService.getConductors();
    } catch (error) {
      if (error instanceof HttpException) {
        throw new HttpException(error.message, error.getStatus());
      }
    }
  }
  @UseGuards(JwtAuthGuard, AdminGuard)
  @Get('conductor/:id')
  async getConductorById(@Param('id') conductorId: string) {
    try {
      return this.busService.getConductorById(conductorId);
    } catch (error) {
      if (error instanceof HttpException) {
        throw new HttpException(error.message, error.getStatus());
      }
    }
  }
  @UseGuards(JwtAuthGuard, AdminGuard)
  @Get('contractor')
  async getAllContractors() {
    try {
      return this.busService.getContractors();
    } catch (error) {
      if (error instanceof HttpException) {
        throw new HttpException(error.message, error.getStatus());
      }
    }
  }
  @UseGuards(JwtAuthGuard, AdminGuard)
  @Get('contractor/:id')
  async getContractorById(@Param('id') contractorId: string) {
    try {
      return this.busService.getContractorById(contractorId);
    } catch (error) {
      if (error instanceof HttpException) {
        throw new HttpException(error.message, error.getStatus());
      }
    }
  }
  @UseGuards(JwtAuthGuard, AdminGuard)
  @Post('contractor')
  async createNewContractor(@Body() contractor: ContractorDto) {
    try {
      return this.busService.createContractor(contractor);
    } catch (error) {
      if (error instanceof HttpException) {
        throw new HttpException(error.message, error.getStatus());
      }
    }
  }
  @UseGuards(JwtAuthGuard, AdminGuard)
  @Delete('contractor/:id')
  async removeContractor(@Body() contractorId: string) {
    try {
      return this.busService.removeContractor(contractorId);
    } catch (error) {
      if (error instanceof HttpException) {
        throw new HttpException(error.message, error.getStatus());
      }
    }
  }
  @UseGuards(JwtAuthGuard, AdminGuard)
  @Post('conductor')
  async createNewConductor(@Body() conductor: ConductorDto) {
    try {
      return this.busService.createConductor(conductor);
    } catch (error) {
      if (error instanceof HttpException) {
        throw new HttpException(error.message, error.getStatus());
      }
    }
  }
  @UseGuards(JwtAuthGuard, AdminGuard)
  @Delete('conductor/:id')
  async removeConductor(@Param('id') conductorId: string) {
    try {
      return this.busService.removeConductor(conductorId);
    } catch (error) {
      if (error instanceof HttpException) {
        throw new HttpException(error.message, error.getStatus());
      }
    }
  }
  @UseGuards(JwtAuthGuard, AdminGuard)
  @Post('schedule')
  async createNewSchedule(@Body() schedule: ScheduleDto) {
    return this.busService.createSchedule(schedule);
  }

  // testing admin guard
  @UseGuards(JwtAuthGuard, AdminGuard)
  @Get('admin-protected')
  async adminProtected() {
    return 'This is admin protected route';
  }
}
