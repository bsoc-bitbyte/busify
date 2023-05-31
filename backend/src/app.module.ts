import {Module} from '@nestjs/common';
import {PrismaModule} from './Prisma/prisma.module';
import {AuthModule} from './auth/auth.module';

@Module({
  imports: [PrismaModule, AuthModule],
})
export class AppModule {}
