import { PassportSerializer } from '@nestjs/passport';
import { AuthService } from '../auth.service';
import { User } from '../entities/user.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SessionSerializer extends PassportSerializer {
  constructor(private readonly authService: AuthService) {
    super();
  }

  serializeUser(user: User, done: Function) {
    console.log('Serialize user');
    done(null, user.id);
  }

  async deserializeUser(payload: string, done: Function) {
    const user = await this.authService.findUserById(payload);
    console.log('Deserialize user: ', user);

    return user ? done(null, user) : done(null, null);
  }
}
