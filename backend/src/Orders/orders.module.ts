import {Module} from '@nestjs/common';
import {OrdersService} from './orders.service';
import {OrdersController} from './orders.controller';
import {RazorpayModule} from 'src/Razorpay/razorpay.module';

@Module({
  controllers: [OrdersController],
  providers: [OrdersService],
  imports: [RazorpayModule],
})
export class OrdersModule {}
