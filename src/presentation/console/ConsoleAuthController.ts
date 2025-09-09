import { AuthenticateUserUseCase } from '../../application/use-cases/AuthenticateUserUseCase';
import { InMemoryUserRepository } from '../../infrastructure/in-memory/InMemoryUserRepository';
import { AuthServiceImpl } from '../../domain/services/AuthServiceImpl';
import * as readline from 'readline';

export class ConsoleAuthController {
  private readonly authUseCase: AuthenticateUserUseCase;
  private readonly userRepository: InMemoryUserRepository;

  constructor() {
    this.userRepository = new InMemoryUserRepository();
    const authService = new AuthServiceImpl(this.userRepository);
    this.authUseCase = new AuthenticateUserUseCase(authService);
  }

  async initialize(): Promise<void> {
    await this.userRepository.seedUsers();
    console.log('Sistema de autenticación iniciado');
    console.log('Usuarios disponibles:');
    console.log('- admin / admin123');
    console.log('- user / password123');
    console.log('- test / test123');
    console.log('-----------------------');

    this.startCLI();
  }

  private startCLI(): void {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    const askCredentials = () => {
      rl.question('Username: ', async (username) => {
        rl.question('Password: ', async (password) => {
          try {
            const isAuthenticated = await this.authUseCase.execute(username, password);
            
            if (isAuthenticated) {
              console.log('Autenticación exitosa!');
            } else {
              console.log('Credenciales incorrectas');
            }
          } catch (error) {
            console.error('Error durante la autenticación:', error);
          }

          console.log('\n-----------------------');
          askCredentials();
        });
      });
    };

    askCredentials();
  }
}