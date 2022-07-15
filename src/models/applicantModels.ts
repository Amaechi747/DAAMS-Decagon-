import mongoose, { Schema, model } from 'mongoose';
import bcrypt from 'bcrypt';
import asyncHandler from 'express-async-handler';


const applicantDetailsSchema = new Schema <IApplicant>({
        firstName: String,
        lastName: String,
        middleName: String,
        emailAddress: String,
        dateOfBirth: Date,
        phoneNumber: Number,
        whatsappPhoneNumber: Number,
        stateOfOrigin: String,
        highestQualification: String,
        courseOfStudy: String,
        gradeAchieved: String,
        gender: String,
        currentLocation: String,
        nyscStatus: String,
        password: String
})

export const Applicant = model<IApplicant>('Applicant', applicantDetailsSchema);

export const newApplicant = async function(data: IApplicant){
    try {
        //Validation for unique users based on email
        const {emailAddress, password} = data;
        const sameEmail = await Applicant.findOne({emailAddress: emailAddress})
        if (data && !sameEmail){
            //Save only unique users
            const applicant = new Applicant({...data});
            await applicant.save();
            return applicant;
        }
        throw new Error('No data to save or email already exists');
    } catch (error) {
        throw new Error('No data to save or email already exists'); 
    }
}

export const dataBase = async function(email:string, sentPassword: string){
    try{
        const user = await Applicant.findOne({emailAddress: email})
        console.log('first User: ', user);
        if (user){
            console.log(user)
            //Compare password
            const passwordIsTrue = await bcrypt.compare(sentPassword, user.password)
            return passwordIsTrue;
        }
    }catch(error){
        throw new Error('Email or Password is wrong');
    }
    
}

const ApplicantDocumentsSchema = new Schema <IApplicationDocuments>({
        emailAddress: String,
        participationAgreement: String,
        nyscCertificate: String,
        statementOfCertificate: String,
        validIdCard: String,
        admissionLetter: String,
        decagonParticipation: String,
        loanProcessing: String,
        applicationLetter: String,
        guarantorsStatementOfNetworth: String,
        indemnityForm: String,
        guarantorsIdCard: String
})

export const ApplicantDocuments = model<IApplicationDocuments>('ApplicantDocuments', ApplicantDocumentsSchema);

export const saveDocuments = async function(files: any, emailAddress: string){
    
    try{
            const userDocuments: IApplicationDocuments = {
                emailAddress: emailAddress,
                participationAgreement: files[0].path,
                nyscCertificate: files[1].path,
                statementOfCertificate: files[2].path,
                validIdCard: files[3].path,
                admissionLetter: files[4].path,
                decagonParticipation: files[5].path,
                loanProcessing: files[6].path,
                applicationLetter: files[7].path,
                guarantorsStatementOfNetworth: files[8].path,
                indemnityForm: files[9].path,
                guarantorsIdCard: files[10].path
            }
            // userDocuments.emailAddress = emailAddress;
            const documents = new ApplicantDocuments({...userDocuments});
            const isSaved = await documents.save();
            return isSaved;

    }catch(error){
        console.log(error)
        throw new Error('Unable to save documents')
    }
}





  