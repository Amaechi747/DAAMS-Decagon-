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
exports.saveDocuments = exports.ApplicantDocuments = exports.dataBase = exports.newApplicant = exports.Applicant = void 0;
const mongoose_1 = require("mongoose");
const bcrypt_1 = __importDefault(require("bcrypt"));
const applicantDetailsSchema = new mongoose_1.Schema({
    firstName: String,
    lastName: String,
    middleName: String,
    emailAddress: String,
    dateOfBirth: Date,
    phoneNumber: Number,
    whatsappPhoneNumber: Number,
    stateOfOrigin: String,
    highestQualification: String,
    courseOfStudy: String,
    gradeAchieved: String,
    gender: String,
    currentLocation: String,
    nyscStatus: String,
    password: String
});
exports.Applicant = (0, mongoose_1.model)('Applicant', applicantDetailsSchema);
const newApplicant = function (data) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            //Validation for unique users based on email
            const { emailAddress, password } = data;
            const sameEmail = yield exports.Applicant.findOne({ emailAddress: emailAddress });
            if (data && !sameEmail) {
                //Save only unique users
                const applicant = new exports.Applicant(Object.assign({}, data));
                yield applicant.save();
                return applicant;
            }
            throw new Error('No data to save or email already exists');
        }
        catch (error) {
            throw new Error('No data to save or email already exists');
        }
    });
};
exports.newApplicant = newApplicant;
const dataBase = function (email, sentPassword) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const user = yield exports.Applicant.findOne({ emailAddress: email });
            console.log('first User: ', user);
            if (user) {
                console.log(user);
                //Compare password
                const passwordIsTrue = yield bcrypt_1.default.compare(sentPassword, user.password);
                return passwordIsTrue;
            }
        }
        catch (error) {
            throw new Error('Email or Password is wrong');
        }
    });
};
exports.dataBase = dataBase;
const ApplicantDocumentsSchema = new mongoose_1.Schema({
    emailAddress: String,
    participationAgreement: String,
    nyscCertificate: String,
    statementOfCertificate: String,
    validIdCard: String,
    admissionLetter: String,
    decagonParticipation: String,
    loanProcessing: String,
    applicationLetter: String,
    guarantorsStatementOfNetworth: String,
    indemnityForm: String,
    guarantorsIdCard: String
});
exports.ApplicantDocuments = (0, mongoose_1.model)('ApplicantDocuments', ApplicantDocumentsSchema);
const saveDocuments = function (files, emailAddress) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const userDocuments = {
                emailAddress: emailAddress,
                participationAgreement: files[0].path,
                nyscCertificate: files[1].path,
                statementOfCertificate: files[2].path,
                validIdCard: files[3].path,
                admissionLetter: files[4].path,
                decagonParticipation: files[5].path,
                loanProcessing: files[6].path,
                applicationLetter: files[7].path,
                guarantorsStatementOfNetworth: files[8].path,
                indemnityForm: files[9].path,
                guarantorsIdCard: files[10].path
            };
            // userDocuments.emailAddress = emailAddress;
            const documents = new exports.ApplicantDocuments(Object.assign({}, userDocuments));
            const isSaved = yield documents.save();
            return isSaved;
        }
        catch (error) {
            console.log(error);
            throw new Error('Unable to save documents');
        }
    });
};
exports.saveDocuments = saveDocuments;
//# sourceMappingURL=applicantModels.js.map