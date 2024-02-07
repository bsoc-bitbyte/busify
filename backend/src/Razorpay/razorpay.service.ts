import {Injectable, Logger} from '@nestjs/common';
const Razorpay = require('razorpay'); // razorpay doesn't have esm support yet

interface OrderOptions {
  amount: string;
  currency: string;
  receipt: string;
  payment_capture: number;
}

@Injectable()
export class RazorpayService {
  private readonly logger = new Logger(RazorpayService.name);
  private readonly razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
  });
  constructor() {}

  async createOrder(options: OrderOptions) {
    return await this.razorpay.orders.create(options);
  }
}
