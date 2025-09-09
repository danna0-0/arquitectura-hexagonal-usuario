import { AuthService } from '../../domain/ports/AuthService';
export declare class AuthenticateUserUseCase {
    private readonly authService;
    constructor(authService: AuthService);
    execute(username: string, password: string): Promise<boolean>;
}
