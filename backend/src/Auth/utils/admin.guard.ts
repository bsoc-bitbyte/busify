import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import {PrismaService} from 'src/Prisma/prisma.service';

@Injectable()
export class AdminGuard implements CanActivate {
  constructor(private prismaService: PrismaService) {}
  async validateAdmin(userId: string) {
    const user = await this.prismaService.users.findUnique({
      where: {
        id: userId,
      },
    });
    if (user?.role === 'admin') {
      return true;
    }
    return false;
  }
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const user = request.user;
    if (user) {
      const isAdmin = await this.validateAdmin(user.id);
      if (isAdmin) {
        return true;
      }
    }
    throw new UnauthorizedException(
      'You are not authorized to access this route.'
    );
  }
}
