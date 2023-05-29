import {Body, Controller, Get, Post, Req, Res, UseGuards} from '@nestjs/common';
import {AuthService} from './auth.service';
// eslint-disable-next-line node/no-extraneous-import
import {Request, Response} from 'express';
import {JwtAuthGuard} from './utils/jwt.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('google')
  async googleAuthRedirect(@Body('code') code: string, @Res() res: Response) {
    return await this.authService.googleLoginCallback(code, res);
  }
  @UseGuards(JwtAuthGuard)
  @Get('me')
  async getMe(@Req() req: Request) {
    const user = await this.authService.getMe(req);
    return user;
  }
}
