import Joi, { ValidationError} from 'joi';

const currentYear = new Date(Date.now());
const minAge = currentYear.getFullYear() - 18;


const applicantSchema = Joi.object({
    firstName: Joi.string()
        .min(3)
        .max(30)
        .required(),
    lastName: Joi.string()
        .min(3)
        .max(30)
        .required(),
    middleName: Joi.string()
        .min(3)
        .max(30),

    emailAddress: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'org'] } })
        .required(),

    password: Joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
        .required(),

    confirmPassword: Joi.ref('password'),

    dateOfBirth: Joi.date()
        .max(`${minAge}-01-01`)
        .iso()
        .messages({'date.format': `Date format is YYYY-MM-DD`,'date.max':`Age must be 18+`})
        .required(),

    gender: Joi.string()
        .required(),

    phoneNumber: Joi.number()
        .required(),
    

    whatsappPhoneNumber: Joi.number(),


    stateOfOrigin: Joi.string()
        .required(),

    highestQualification: Joi.string()
        .required(),

    courseOfStudy: Joi.string()
        .required(), 

    gradeAchieved: Joi.string()
        .required(),

    currentLocation: Joi.string()
        .required(),

    nyscStatus: Joi.string()
        .required()
      
})

export const validateInput = async function (data: IApplicant){
    try {
        const value = await applicantSchema.validateAsync({...data});
        if(value){
            return value;
        }
      }
      catch (error:unknown ) {
        if (error instanceof ValidationError){
            const {message} = error.details[0];
            console.log(message)
            throw new Error(message);
        }
      }
}


