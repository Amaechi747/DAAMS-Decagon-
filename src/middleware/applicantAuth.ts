import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';
import {Applicant} from '../models/applicantModels';


export const isLoggedIn = asyncHandler(async (req:Request, res: Response, next:NextFunction)=>{
    let token;
    if(req.cookies.token){
        try{
            token = req.cookies.token; 
            // Verify Token
            if (process.env.JWT_SECRET){
                const decoded = jwt.verify(token, process.env.JWT_SECRET);
                if( typeof(decoded) !== "string"){
                    const {id} = decoded;
                    // Get user from the token
                    const user = await Applicant.findOne({emailAddress: id});
                    res.cookie('user', user);
                }
                next();
                   
            }
                    
        }catch(error){
            console.log(error)
            res.status(401);
            throw new Error('Not authorized');
        }
    }else if(((req.headers.authorization !== undefined) && (req.headers.authorization.startsWith('Bearer'))) ){
        try{
            token = req.headers.authorization.split(' ')[1] 

            // Verify Token
            if (process.env.JWT_SECRET){
                const decoded = jwt.verify(token, process.env.JWT_SECRET);
                // Get user from the token
                if( typeof(decoded) !== "string"){
                    const {id} = decoded;
                    // Get user from the token
                    const user = await Applicant.findOne({emailAddress: id});
                    res.cookie('user', user);
                }
                next();
            }
                    
        }catch(error){
            res.status(401);
            throw new Error('Not authorized');
        }
    }
    if(!token){
        res.status(401);
        res.send(false)
        throw new Error('Not authorized, no token')
    }
})