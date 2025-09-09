import { User } from '../../domain/entities/User';
import { UserRepository } from '../../domain/ports/UserRepository';
export declare class InMemoryUserRepository implements UserRepository {
    private users;
    findByUsername(username: string): Promise<User | null>;
    save(user: User): Promise<User>;
    findAll(): Promise<User[]>;
    seedUsers(): Promise<void>;
}
