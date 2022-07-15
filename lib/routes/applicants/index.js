"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const applicantController_1 = require("../../controllers/applicantController");
const multer_1 = __importDefault(require("multer"));
const uploads_1 = require("../../controllers/uploads");
const isRegistered_1 = __importDefault(require("../../middleware/isRegistered"));
const { storage } = require('../../utils/cloudinary/cloudinary');
// const parser = multer({ storage: storage });
const upload = (0, multer_1.default)({ storage });
// const upload = multer({dest: 'uploads/'});
const router = express_1.default.Router();
/* GET home page. */
router.post('/register', applicantController_1.registerApplicant);
router.get('/verify_user', applicantController_1.verifyApplicant);
router.get('/login', applicantController_1.getLoginPage);
router.post('/login', applicantController_1.loginUser);
router.post('/uploads', isRegistered_1.default, upload.array('image'), uploads_1.uploadDocuments);
router.get('/uploads', uploads_1.getUploadPage);
router.post('/uploads/guarantor', uploads_1.uploadGuarantor);
exports.default = router;
//# sourceMappingURL=index.js.map