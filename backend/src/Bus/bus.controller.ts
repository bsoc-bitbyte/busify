import {Controller, Get, UseGuards} from '@nestjs/common';
import {BusService} from './bus.service';
import {AdminGuard} from 'src/Auth/utils/admin.guard';
import {JwtAuthGuard} from 'src/Auth/utils/jwt.guard';

@Controller('bus')
export class BusController {
  constructor(private readonly busService: BusService) {}
  @Get('schedule')
  async getBusSchedule() {
    return this.busService.getBusSchedule();
  }

  // testing admin guard
  @UseGuards(JwtAuthGuard, AdminGuard)
  @Get('admin-protected')
  async adminProtected() {
    return 'This is admin protected route';
  }
}
