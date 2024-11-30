import { Controller, Get, UseGuards } from '@nestjs/common';
import { GoogleOAuthGuard } from './guards/google-oauth.guard';

@Controller('auth')
export class AuthController {
  @Get('google/login')
  @UseGuards(GoogleOAuthGuard)
  async login() {
    return { msg: 'Google Login' };
  }

  @Get('google/redirect')
  @UseGuards(GoogleOAuthGuard)
  async redirect() {
    return { msg: 'Ok' };
  }
}
