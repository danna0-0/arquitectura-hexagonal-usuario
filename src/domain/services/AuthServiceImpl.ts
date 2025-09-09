import { AuthService } from '../ports/AuthService';
import { UserRepository } from '../ports/UserRepository';

export class AuthServiceImpl implements AuthService {
  constructor(private readonly userRepository: UserRepository) {}

  async authenticate(username: string, password: string): Promise<boolean> {
    const user = await this.userRepository.findByUsername(username);
    
    if (!user) {
      return false;
    }

    return user.password === password;
  }
}