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
exports.logout = exports.loginUser = exports.getLoginPage = exports.verifyApplicant = exports.registerApplicant = void 0;
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const applicantModels_1 = require("../models/applicantModels");
const applicantSchema_1 = require("../models/applicantSchema");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const mailer_1 = require("../utils/mailer");
const bcrypt_1 = __importDefault(require("bcrypt"));
exports.registerApplicant = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const applicant = req.body;
        const result = yield (0, applicantSchema_1.validateInput)(applicant);
        const { emailAddress } = result;
        console.log(emailAddress);
        const token = jsonwebtoken_1.default.sign(Object.assign({}, applicant), `${process.env.JWT_SECRET}`, {
            expiresIn: '30d'
        });
        const url = `${process.env.BASE_URL}/applicants/verify_user?token=${token}`;
        //Send email to applicant
        yield (0, mailer_1.emailFunction)(emailAddress, url);
        res.status(200).send(`A verification mail has been sent to ${applicant.emailAddress}`);
        return;
    }
    catch (error) {
        console.log(error);
    }
}));
exports.verifyApplicant = (0, express_async_handler_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { token } = req.query;
    console.log(token);
    if (token) {
        const decoded = jsonwebtoken_1.default.verify(`${token}`, `${process.env.JWT_SECRET}`);
        if (decoded instanceof Object) {
            const { firstName, lastName, middleName, emailAddress, dateOfBirth, phoneNumber, whatsappPhoneNumber, stateOfOrigin, highestQualification, courseOfStudy, gradeAchieved, gender, currentLocation, nyscStatus, password } = decoded;
            //Encrypt Password
            let hashedPassword = '';
            const salt = yield bcrypt_1.default.genSalt(10);
            hashedPassword = yield bcrypt_1.default.hash(password, salt);
            const userData = {
                firstName,
                lastName,
                middleName,
                emailAddress,
                dateOfBirth,
                phoneNumber,
                whatsappPhoneNumber,
                stateOfOrigin,
                highestQualification,
                courseOfStudy,
                gradeAchieved,
                gender,
                currentLocation,
                nyscStatus,
                password: hashedPassword
            };
            // Save to database
            const newSavedApplicant = yield (0, applicantModels_1.newApplicant)(userData);
            console.log(newSavedApplicant);
            res.status(200).redirect('applicants/login');
            return;
        }
    }
}));
exports.getLoginPage = (0, express_async_handler_1.default)(function (req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        res.status(200).send(true);
    });
});
exports.loginUser = (0, express_async_handler_1.default)(function (req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const { emailAddress, password } = req.body;
        console.log('Request body: ', emailAddress);
        //Search in database
        const user = yield (0, applicantModels_1.dataBase)(emailAddress, password);
        if (user) {
            const token = yield generateToken(emailAddress);
            console.log(token);
            res.cookie('token', token);
            res.cookie('user', user);
            res.status(200).send(true);
            return;
        }
        else {
            res.status(401).send(false);
            return;
        }
    });
});
exports.logout = (0, express_async_handler_1.default)(function (req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        res.cookie('token', '');
        req.cookies.token = '';
        res.cookie('user', '');
        req.cookies.user = '';
        res.status(200).send(false);
    });
});
// Generate Token
const generateToken = function (id) {
    if (process.env.JWT_SECRET) {
        return jsonwebtoken_1.default.sign({ id }, process.env.JWT_SECRET, {
            expiresIn: '30d',
        });
    }
};
//# sourceMappingURL=applicantController.js.map