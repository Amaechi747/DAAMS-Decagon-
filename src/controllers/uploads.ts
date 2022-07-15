import {Request,Response, NextFunction} from 'express'
import asyncHandler from 'express-async-handler';
import {saveDocuments, ApplicantDocuments} from '../models/applicantModels'

// const upload = multer({storage});
// const upload = multer({dest: 'uploads/'});

export const uploadDocuments = asyncHandler ( async function(req: Request, res: Response, next: NextFunction){
    try {
        const token = req.cookies.token;
        const user = req.cookies.user;
        const files: any = req.files;

        console.log(files)
        // const emailAddress = user.emailAddress;
        const emailAddress = 'amaechimoses8@gmail.com';
        const isSaved = await saveDocuments(files, emailAddress)
        if(isSaved){
            res.status(200).send(true);
            return;
        }
    
      
    } catch (error) {
        // console.log(error)
        throw new Error('Unable to save credentials');
    }
   
   
   
})


export const getUploadPage = function(req: Request, res: Response, next: NextFunction){
    res.status(200).render('form');
}
export const uploadGuarantor = function(req: Request, res: Response, next: NextFunction){
    res.status(200).send('I am happy')
}

