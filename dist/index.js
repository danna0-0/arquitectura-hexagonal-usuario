"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ConsoleAuthController_1 = require("./presentation/console/ConsoleAuthController");
const authController = new ConsoleAuthController_1.ConsoleAuthController();
authController.initialize().catch(console.error);
