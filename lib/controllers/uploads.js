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
exports.uploadGuarantor = exports.getUploadPage = exports.uploadDocuments = void 0;
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const applicantModels_1 = require("../models/applicantModels");
// const upload = multer({storage});
// const upload = multer({dest: 'uploads/'});
exports.uploadDocuments = (0, express_async_handler_1.default)(function (req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const token = req.cookies.token;
            const user = req.cookies.user;
            const files = req.files;
            console.log(files);
            // const emailAddress = user.emailAddress;
            const emailAddress = 'amaechimoses8@gmail.com';
            const isSaved = yield (0, applicantModels_1.saveDocuments)(files, emailAddress);
            if (isSaved) {
                res.status(200).send(true);
                return;
            }
        }
        catch (error) {
            // console.log(error)
            throw new Error('Unable to save credentials');
        }
    });
});
const getUploadPage = function (req, res, next) {
    res.status(200).render('form');
};
exports.getUploadPage = getUploadPage;
const uploadGuarantor = function (req, res, next) {
    res.status(200).send('I am happy');
};
exports.uploadGuarantor = uploadGuarantor;
//# sourceMappingURL=uploads.js.map