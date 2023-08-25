import {Module} from '@nestjs/common';
import {OrdersService} from './orders.service';
import {OrdersController} from './orders.controller';
import {RazorpayModule} from 'src/Razorpay/razorpay.module';

@Module({
  imports: [RazorpayModule],
  controllers: [OrdersController],
  providers: [OrdersService],
})
export class OrdersModule {}
