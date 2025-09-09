import { ConsoleAuthController } from './presentation/console/ConsoleAuthController';

const authController = new ConsoleAuthController();
authController.initialize().catch(console.error);