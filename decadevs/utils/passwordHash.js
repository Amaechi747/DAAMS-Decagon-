"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PASSWORD = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const PASSWORD = {
    // return the hash password
    async hash(password) {
        return bcrypt_1.default.hash(password, 10);
    },
    //compare password with hash
    async compare(password, hash) {
        return bcrypt_1.default.compare(password, hash);
    },
};
exports.PASSWORD = PASSWORD;
