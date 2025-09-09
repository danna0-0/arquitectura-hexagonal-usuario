import { AuthService } from '../../domain/ports/AuthService';

export class AuthenticateUserUseCase {
  constructor(private readonly authService: AuthService) {}

  async execute(username: string, password: string): Promise<boolean> {
    return this.authService.authenticate(username, password);
  }
}