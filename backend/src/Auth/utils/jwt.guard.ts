import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import {JwtService} from '@nestjs/jwt';
@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}
  validateToken(token: string) {
    try {
      const user = this.jwtService.verify(token);
      return user;
    } catch (err) {
      throw new UnauthorizedException(
        'You are not logged in or there may be an error. Please log in again.'
      );
    }
  }

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    if (request.headers.cookie) {
      const headers = Object.fromEntries(
        request.headers.cookie.split('; ').map(x => x.split('='))
      );
      const token = headers['jwt'];
      const user = this.validateToken(token);
      if (!user) {
        throw new UnauthorizedException(
          'You are not logged in or there may be an error. Please log in again.'
        );
      }
      request.user = user;
      return true;
    } else {
      throw new UnauthorizedException(
        'You are not logged in or there may be an error. Please log in again.'
      );
    }
  }
}
