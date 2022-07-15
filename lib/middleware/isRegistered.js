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
const applicantModels_1 = require("../models/applicantModels");
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const isRegistered = (0, express_async_handler_1.default)(function (req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        // Has uploaded documents
        const token = req.cookies.token;
        const user = req.cookies.user;
        // const emailAddress = user.emailAddress;
        const emailAddress = 'amaechimoses8@gmail.com';
        const isRegistered = yield applicantModels_1.ApplicantDocuments.findOne({ emailAddress: emailAddress });
        if (isRegistered) {
            res.status(200).send(true);
            return;
        }
        else {
            next();
        }
    });
});
exports.default = isRegistered;
//# sourceMappingURL=isRegistered.js.map