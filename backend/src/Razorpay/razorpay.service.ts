import {Injectable} from '@nestjs/common';
const Razorpay = require('razorpay'); // razorpay doesn't support es6 imports
import {v4 as uuid} from 'uuid';

@Injectable()
export class RazorpayService {
  constructor() {}
  private razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
  });
  async createOrder(amount: number) {
    const options = {
      amount: amount * 100,
      currency: 'INR',
      receipt: uuid(),
      payment_capture: 1,
    };
    const response = await this.razorpay.orders.create(options);
    return response;
  }
}
