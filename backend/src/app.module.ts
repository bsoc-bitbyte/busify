import {Module} from '@nestjs/common';
import {PrismaModule} from './Prisma/prisma.module';
import {AuthModule} from './Auth/auth.module';
import {BusModule} from './Bus/bus.module';
import {GlobalJwtModule} from './globalJwt.module';
import {RedisCustomModule} from './Redis/redis.module';
import {RazorpayModule} from './Razorpay/razorpay.module';
import {OrdersModule} from './Orders/orders.module';

@Module({
  imports: [
    PrismaModule,
    RedisCustomModule,
    OrdersModule,
    RazorpayModule,
    GlobalJwtModule,
    AuthModule,
    BusModule,
  ],
})
export class AppModule {}
