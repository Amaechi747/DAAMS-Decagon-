"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const applicants_1 = require("../../controllers/admin/applicants");
const router = express_1.default.Router();
/* GET home page. */
router.get('/applicants', applicants_1.getApplicants);
router.get('/applicants/:id', applicants_1.getIndividual);
exports.default = router;
//# sourceMappingURL=index.js.map