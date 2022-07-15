import express from 'express';
import {registerApplicant, verifyApplicant, getLoginPage,loginUser} from '../../controllers/applicantController'
import {isLoggedIn} from '../../middleware/applicantAuth';
import multer from 'multer';
import {uploadDocuments, getUploadPage, uploadGuarantor} from '../../controllers/uploads';
import isRegistered from '../../middleware/isRegistered';

const {storage} = require('../../utils/cloudinary/cloudinary');


// const parser = multer({ storage: storage });
const upload = multer({storage});
// const upload = multer({dest: 'uploads/'});

const router = express.Router();

/* GET home page. */

router.post('/register', registerApplicant);

router.get('/verify_user',verifyApplicant);
router.get('/login', getLoginPage);
router.post('/login', loginUser);
router.post('/uploads', isRegistered, upload.array('image'), uploadDocuments);
router.get('/uploads', getUploadPage);
router.post('/uploads/guarantor', uploadGuarantor)

export default router;
