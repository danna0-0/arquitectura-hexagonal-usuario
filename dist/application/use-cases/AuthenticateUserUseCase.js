"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticateUserUseCase = void 0;
class AuthenticateUserUseCase {
    constructor(authService) {
        this.authService = authService;
    }
    async execute(username, password) {
        return this.authService.authenticate(username, password);
    }
}
exports.AuthenticateUserUseCase = AuthenticateUserUseCase;
