import {Controller, Get, UseGuards} from '@nestjs/common';
import {BusService} from './bus.service';
import {JwtAuthGuard} from 'src/Auth/utils/jwt.guard';

@Controller('bus')
export class BusController {
  constructor(private readonly busService: BusService) {}
  @UseGuards(JwtAuthGuard)
  @Get('schedule')
  async getSchedule() {
    return this.busService.getSchedule();
  }
}
