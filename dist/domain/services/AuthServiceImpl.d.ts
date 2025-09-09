import { AuthService } from '../ports/AuthService';
import { UserRepository } from '../ports/UserRepository';
export declare class AuthServiceImpl implements AuthService {
    private readonly userRepository;
    constructor(userRepository: UserRepository);
    authenticate(username: string, password: string): Promise<boolean>;
}
