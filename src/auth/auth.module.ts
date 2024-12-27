import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { GoogleOAuthStrategy } from './strategies/google-oauth20.strategy';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { SessionSerializer } from './serializers/session.serializer';
import { ConfigModule } from '@nestjs/config';
import { Group } from './entities/group.entity';
import { Flashcard } from './entities/flashcard.entity';

@Module({
  imports: [ConfigModule, TypeOrmModule.forFeature([User, Group, Flashcard])],
  controllers: [AuthController],
  providers: [AuthService, GoogleOAuthStrategy, SessionSerializer],
})
export class AuthModule {}
