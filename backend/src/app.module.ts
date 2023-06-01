import {Module} from '@nestjs/common';
import {PrismaModule} from './Prisma/prisma.module';
import {AuthModule} from './Auth/auth.module';
import {BusModule} from './Bus/bus.module';
import {GlobalJwtModule} from './globalJwt.module';

@Module({
  imports: [PrismaModule, GlobalJwtModule, AuthModule, BusModule],
})
export class AppModule {}
