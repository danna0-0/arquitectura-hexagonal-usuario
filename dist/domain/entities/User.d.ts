export interface User {
    id: string;
    username: string;
    password: string;
    createdAt: Date;
}
export declare class UserEntity implements User {
    id: string;
    username: string;
    password: string;
    createdAt: Date;
    constructor(id: string, username: string, password: string, createdAt?: Date);
    static create(username: string, password: string): UserEntity;
}
