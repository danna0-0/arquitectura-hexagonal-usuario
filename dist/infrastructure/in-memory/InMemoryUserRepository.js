"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InMemoryUserRepository = void 0;
const User_1 = require("../../domain/entities/User");
class InMemoryUserRepository {
    constructor() {
        this.users = [];
    }
    async findByUsername(username) {
        return this.users.find(user => user.username === username) || null;
    }
    async save(user) {
        const newUser = new User_1.UserEntity(user.id, user.username, user.password, user.createdAt);
        this.users.push(newUser);
        return newUser;
    }
    async findAll() {
        return [...this.users];
    }
    async seedUsers() {
        const testUsers = [
            User_1.UserEntity.create('admin', 'admin123'),
            User_1.UserEntity.create('user', 'password123'),
            User_1.UserEntity.create('test', 'test123')
        ];
        for (const user of testUsers) {
            await this.save(user);
        }
    }
}
exports.InMemoryUserRepository = InMemoryUserRepository;
