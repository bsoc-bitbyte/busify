import {Module} from '@nestjs/common';
import {BusController} from './bus.controller';
import {BusService} from './bus.service';

@Module({
  imports: [],
  controllers: [BusController],
  providers: [BusService],
})
export class BusModule {}
