"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthServiceImpl = void 0;
class AuthServiceImpl {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async authenticate(username, password) {
        const user = await this.userRepository.findByUsername(username);
        if (!user) {
            return false;
        }
        return user.password === password;
    }
}
exports.AuthServiceImpl = AuthServiceImpl;
