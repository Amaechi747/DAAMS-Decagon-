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
exports.getIndividual = exports.getApplicants = void 0;
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const applicantModels_1 = require("../../models/applicantModels");
exports.getApplicants = (0, express_async_handler_1.default)(function (req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const applicants = yield applicantModels_1.Applicant.find();
        console.log(applicants);
        res.status(200).send(applicants);
    });
});
exports.getIndividual = (0, express_async_handler_1.default)(function (req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const id = req.params.id;
            const applicant = yield applicantModels_1.Applicant.findOne({ _id: `${id}` });
            if (applicant) {
                //Create array to store applicant details
                const dataArray = [];
                const emailAddress = applicant.emailAddress;
                const documents = yield applicantModels_1.ApplicantDocuments.findOne({ emailAddress: emailAddress });
                //Populate array
                dataArray.push(applicant);
                dataArray.push(documents);
                //Send result
                res.status(200).send(dataArray);
                return;
            }
        }
        catch (error) {
            throw new Error('Request failed');
        }
    });
});
//# sourceMappingURL=applicants.js.map