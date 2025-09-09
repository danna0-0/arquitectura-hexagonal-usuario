import { User, UserEntity } from '../../domain/entities/User';
import { UserRepository } from '../../domain/ports/UserRepository';

export class InMemoryUserRepository implements UserRepository {
  private users: User[] = [];

  async findByUsername(username: string): Promise<User | null> {
    return this.users.find(user => user.username === username) || null;
  }

  async save(user: User): Promise<User> {
    const newUser = new UserEntity(
      user.id,
      user.username,
      user.password,
      user.createdAt
    );
    this.users.push(newUser);
    return newUser;
  }

  async findAll(): Promise<User[]> {
    return [...this.users];
  }

  async seedUsers(): Promise<void> {
    const testUsers = [
      UserEntity.create('admin', 'admin123'),
      UserEntity.create('user', 'password123'),
      UserEntity.create('test', 'test123')
    ];

    for (const user of testUsers) {
      await this.save(user);
    }
  }
}