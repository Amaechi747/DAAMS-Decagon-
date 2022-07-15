import {Request, Response, NextFunction} from 'express'
import asyncHandler from 'express-async-handler';
import {Applicant, ApplicantDocuments} from '../../models/applicantModels';


export const getApplicants = asyncHandler( async function(req: Request, res: Response, next: NextFunction){
    const applicants = await Applicant.find()
    console.log(applicants)
    res.status(200).send(applicants)
})

export const getIndividual = asyncHandler( async function(req: Request, res: Response, next: NextFunction){
    try{
        const id = req.params.id;
        const applicant = await Applicant.findOne({_id: `${id}`})
        if(applicant){
            //Create array to store applicant details
            const dataArray = [];
            const emailAddress = applicant.emailAddress
            const documents = await ApplicantDocuments.findOne({emailAddress: emailAddress})
            //Populate array
            dataArray.push(applicant)
            dataArray.push(documents)
            //Send result
            res.status(200).send(dataArray);
            return;
        }
    }catch(error){
        throw new Error('Request failed')
    }
   
})