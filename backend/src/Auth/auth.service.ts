import {
  Injectable,
  NotAcceptableException,
  UnauthorizedException,
} from '@nestjs/common';
import {PrismaService} from '../Prisma/prisma.service';
import {JwtService} from '@nestjs/jwt';
// eslint-disable-next-line node/no-extraneous-import
import {Response} from 'express';
import axios from 'axios';

@Injectable({})
export class AuthService {
  constructor(private prisma: PrismaService, private jwtService: JwtService) {}

  // /google/callback route handler
  async googleLoginCallback(code: string, res: Response) {
    const {id_token} = await this.getGoogleOAuthToken(code);
    const decodedUser: any = this.jwtService.decode(id_token); //TODO: fix any with interface
    const {token} = this.createToken(decodedUser.name, decodedUser.sub);
    // check if user exists in db
    const user = await this.prisma.users.findUnique({
      where: {
        email: decodedUser.email,
      },
    });
    if (user) {
      res
        .status(202)
        .cookie('jwt', token, {
          httpOnly: true,
          sameSite: 'none',
          secure: true,
        })
        .send(user);
      return;
    }
    // if user does not exist, create user in db
    const newUser = await this.prisma.users.create({
      data: {
        email: decodedUser.email,
        name: decodedUser.name,
        id: decodedUser.sub,
        picture: decodedUser.picture,
      },
    });
    res
      .status(202)
      .cookie('jwt', token, {
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24 * 30,
      })
      .send(newUser);
  }
  // /me route handler
  async getCurrentUser(req) {
    if (!req.user) {
      throw new UnauthorizedException(
        'You are not logged in or there may be an error. Please log in again.'
      );
    }
    const user = await this.prisma.users.findUnique({
      where: {
        id: req.user.id,
      },
    });
    return user;
  }

  // /logout route handler
  async logout(res) {
    res
      .clearCookie('jwt')
      .status(200)
      .send({message: 'Successfully logged out.'});
  }

  // helper functions

  // create the jwt token with the user id and email
  createToken(email: string, id: string) {
    const payload = {email, id};
    const token = this.jwtService.sign(payload, {expiresIn: '30d'});
    return {token};
  }
  // get id token from google
  async getGoogleOAuthToken(code: string) {
    const url = 'https://oauth2.googleapis.com/token';
    const values = {
      code,
      client_id: process.env.GOOGLE_CLIENT_ID,
      client_secret: process.env.GOOGLE_SECRET,
      redirect_uri: `${process.env.FRONTEND_URL}/google`,
      grant_type: 'authorization_code',
    };
    try {
      const response = await axios.post(url, new URLSearchParams(values), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });
      return response.data;
    } catch (error) {
      throw new NotAcceptableException(error.message); //TODO: fix error type
    }
  }
}
