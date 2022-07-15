import {Request, Response, NextFunction} from 'express'
import asyncHandler from 'express-async-handler'
import { newApplicant, dataBase } from '../models/applicantModels';
import { validateInput } from '../models/applicantSchema';
import jwt from 'jsonwebtoken';
import {emailFunction} from '../utils/mailer';
import bcrypt from 'bcrypt'


export const registerApplicant = asyncHandler(async (req: Request, res: Response) =>{
    try {
        const applicant: IApplicant = req.body;
        const result = await validateInput(applicant);
        const {emailAddress} = result;
        console.log(emailAddress);
        const token = jwt.sign({...applicant}, `${process.env.JWT_SECRET}`, {
            expiresIn: '30d'})
        const url = `${process.env.BASE_URL}/applicants/verify_user?token=${token}`;
        //Send email to applicant
        await emailFunction(emailAddress, url)
        res.status(200).send(`A verification mail has been sent to ${applicant.emailAddress}`)
        return
    } catch (error) {
        console.log(error)
    }    
})



export const verifyApplicant = asyncHandler(async (req: Request, res: Response, next: NextFunction) =>{
    const {token} = req.query;
    console.log(token)
    if(token){
        const decoded = jwt.verify(`${token}`, `${process.env.JWT_SECRET}`);
        if(decoded instanceof Object){
            const { 
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
                password
            } = decoded

            //Encrypt Password
            let hashedPassword = '';
            const salt = await bcrypt.genSalt(10);
            hashedPassword = await bcrypt.hash(password, salt)
        
        
            const userData:IApplicant = { 
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
            }
            // Save to database
            const newSavedApplicant = await newApplicant(userData)
            console.log(newSavedApplicant);
            res.status(200).redirect('applicants/login');
            return;
        
            
        }
        
    }
    
})

export const getLoginPage = asyncHandler( async function(req: Request, res: Response, next: NextFunction){
    res.status(200).send(true);
})


export const loginUser = asyncHandler( async function(req: Request, res: Response, next: NextFunction){
    const {emailAddress, password} = req.body;
    console.log('Request body: ',emailAddress)
    //Search in database
    const user = await dataBase(emailAddress, password);
    if(user){
        const token = await generateToken(emailAddress);
        console.log(token)
        res.cookie('token', token);
        res.cookie('user', user)
        res.status(200).send(true);
        return;
    }else{
        res.status(401).send(false);
        return;
    }
    
})


export const logout = asyncHandler( async function(req: Request, res: Response, next: NextFunction){
    
    res.cookie('token', '')
    req.cookies.token = ''
    res.cookie('user', '')
    req.cookies.user = ''
    res.status(200).send(false);
 
})

// Generate Token
const generateToken = function(id: string){
    if(process.env.JWT_SECRET ){
        return jwt.sign({id}, process.env.JWT_SECRET, {
          expiresIn: '30d',
      })
    }
      
}



