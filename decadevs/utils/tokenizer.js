"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TOKEN = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const payload = "decadevs";
const TOKEN = {
    async sign(id) {
        return jsonwebtoken_1.default.sign({ id: id }, payload, { expiresIn: "302400s" });
    },
    async verify(token) {
        return jsonwebtoken_1.default.verify(token, payload);
    },
};
exports.TOKEN = TOKEN;
