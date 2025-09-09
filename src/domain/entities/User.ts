export interface User {
  id: string;
  username: string;
  password: string;
  createdAt: Date;
}

export class UserEntity implements User {
  constructor(
    public id: string,
    public username: string,
    public password: string,
    public createdAt: Date = new Date()
  ) {}

  static create(username: string, password: string): UserEntity {
    const id = Math.random().toString(36).substr(2, 9);
    return new UserEntity(id, username, password);
  }
}