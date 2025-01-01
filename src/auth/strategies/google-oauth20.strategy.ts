import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Profile, Strategy } from 'passport-google-oauth20';
import { AuthService } from '../auth.service';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class GoogleOAuthStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly authService: AuthService,
    private readonly configService: ConfigService,
  ) {
    super({
      clientID: configService.get('GOOGLE_STRATEGY_CLIENT_ID'),
      clientSecret: configService.get('GOOGLE_STRATEGY_CLIENT_SECRET'),
      callbackURL: `${configService.get('BASE_API_URL_LOCAL')}/api/auth/google/redirect`,
      scope: ['profile', 'email'],
    });
  }

  async validate(accessToken: string, refreshToken: string, profile: Profile) {
    const validatedUser = this.authService.validateUser({
      email: profile?.emails[0]?.value,
      firstName: profile?.name?.givenName,
      lastName: profile?.name?.familyName,
    });

    return validatedUser ?? null;
  }
}
