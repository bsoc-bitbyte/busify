import {Module} from '@nestjs/common';
import {RazorpayService} from './razorpay.service';

@Module({
  imports: [],
  controllers: [],
  providers: [RazorpayService],
  exports: [RazorpayService],
})
export class RazorpayModule {}
