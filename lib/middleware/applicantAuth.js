"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isLoggedIn = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const applicantModels_1 = require("../models/applicantModels");
exports.isLoggedIn = (0, express_async_handler_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let token;
    if (req.cookies.token) {
        try {
            token = req.cookies.token;
            // Verify Token
            if (process.env.JWT_SECRET) {
                const decoded = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
                if (typeof (decoded) !== "string") {
                    const { id } = decoded;
                    // Get user from the token
                    const user = yield applicantModels_1.Applicant.findOne({ emailAddress: id });
                    res.cookie('user', user);
                }
                next();
            }
        }
        catch (error) {
            console.log(error);
            res.status(401);
            throw new Error('Not authorized');
        }
    }
    else if (((req.headers.authorization !== undefined) && (req.headers.authorization.startsWith('Bearer')))) {
        try {
            token = req.headers.authorization.split(' ')[1];
            // Verify Token
            if (process.env.JWT_SECRET) {
                const decoded = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
                // Get user from the token
                if (typeof (decoded) !== "string") {
                    const { id } = decoded;
                    // Get user from the token
                    const user = yield applicantModels_1.Applicant.findOne({ emailAddress: id });
                    res.cookie('user', user);
                }
                next();
            }
        }
        catch (error) {
            res.status(401);
            throw new Error('Not authorized');
        }
    }
    if (!token) {
        res.status(401);
        res.send(false);
        throw new Error('Not authorized, no token');
    }
}));
//# sourceMappingURL=applicantAuth.js.map