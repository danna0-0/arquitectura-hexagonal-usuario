"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserEntity = void 0;
class UserEntity {
    constructor(id, username, password, createdAt = new Date()) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.createdAt = createdAt;
    }
    static create(username, password) {
        const id = Math.random().toString(36).substr(2, 9);
        return new UserEntity(id, username, password);
    }
}
exports.UserEntity = UserEntity;
