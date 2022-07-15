import {Request, Response, NextFunction} from 'express';
import { ApplicantDocuments } from "../models/applicantModels";
import asyncHandler from 'express-async-handler';


const isRegistered = asyncHandler( async function(req: Request, res: Response, next: NextFunction){
    // Has uploaded documents
    const token = req.cookies.token;
    const user = req.cookies.user;

    // const emailAddress = user.emailAddress;
    const emailAddress = 'amaechimoses8@gmail.com';
    const isRegistered = await ApplicantDocuments.findOne({emailAddress: emailAddress});
    if(isRegistered){
        res.status(200).send(true)
        return
    }else{
        next();
    }

})

export default isRegistered;
