import { Injectable } from '@nestjs/common';
import { UserDetails } from './dtos/user-details.dto';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async validateUser(userDetails: UserDetails) {
    console.log('AuthService userDetails: ', userDetails);

    const user = await this.userRepository.findOneBy({
      email: userDetails?.email,
    });
    console.log(user);
    if (user) return user;

    const newUser = this.userRepository.create(userDetails);

    return this.userRepository.save(newUser);
  }

  async findUserById(id: string) {
    return await this.userRepository.findOneBy({ id });
  }
}
