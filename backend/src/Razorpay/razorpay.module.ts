import {Module} from '@nestjs/common';
import {RazorpayService} from './razorpay.service';
@Module({
  providers: [RazorpayService],
  exports: [RazorpayService],
})
export class RazorpayModule {}
