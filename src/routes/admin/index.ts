import express, {Request, Response, NextFunction} from 'express';
import {getApplicants, getIndividual} from '../../controllers/admin/applicants';
const router = express.Router()

/* GET home page. */
router.get('/applicants', getApplicants);
router.get('/applicants/:id', getIndividual);



export default router;

