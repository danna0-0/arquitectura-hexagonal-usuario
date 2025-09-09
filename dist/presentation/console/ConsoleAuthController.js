"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsoleAuthController = void 0;
const AuthenticateUserUseCase_1 = require("../../application/use-cases/AuthenticateUserUseCase");
const InMemoryUserRepository_1 = require("../../infrastructure/in-memory/InMemoryUserRepository");
const AuthServiceImpl_1 = require("../../domain/services/AuthServiceImpl");
const readline = __importStar(require("readline"));
class ConsoleAuthController {
    constructor() {
        this.userRepository = new InMemoryUserRepository_1.InMemoryUserRepository();
        const authService = new AuthServiceImpl_1.AuthServiceImpl(this.userRepository);
        this.authUseCase = new AuthenticateUserUseCase_1.AuthenticateUserUseCase(authService);
    }
    async initialize() {
        await this.userRepository.seedUsers();
        console.log('Sistema de autenticación iniciado');
        console.log('Usuarios disponibles:');
        console.log('- admin / admin123');
        console.log('- user / password123');
        console.log('- test / test123');
        console.log('-----------------------');
        this.startCLI();
    }
    startCLI() {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        const askCredentials = () => {
            rl.question('Username: ', async (username) => {
                rl.question('Password: ', async (password) => {
                    try {
                        const isAuthenticated = await this.authUseCase.execute(username, password);
                        if (isAuthenticated) {
                            console.log('Autenticación exitosa!');
                        }
                        else {
                            console.log('Credenciales incorrectas');
                        }
                    }
                    catch (error) {
                        console.error('Error durante la autenticación:', error);
                    }
                    console.log('\n-----------------------');
                    askCredentials();
                });
            });
        };
        askCredentials();
    }
}
exports.ConsoleAuthController = ConsoleAuthController;
