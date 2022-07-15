interface IApplicant{
    firstName: string;
    lastName: string;
    middleName: string;
    emailAddress: string;
    dateOfBirth: Date;
    phoneNumber: number;
    whatsappPhoneNumber?: number;
    stateOfOrigin: string;
    highestQualification: string
    courseOfStudy: string;
    gradeAchieved: string;
    gender: string;
    currentLocation: string;
    nyscStatus: string,
    password: string
}
enum Role{
    Admin = 1,
    Decadev,
    Applicant
}

interface Iauth {
  type: string;
  user: string;
  pass: string;
  clientId: string;
  clientSecret: string;
  refreshToken: string;
  accessToken: string
}

declare namespace nodemailer {
    interface TransporterOptions{
      service: string;
      auth: Iauth
    }
}

interface Ifile {
    fieldname: string;
    originalname: string;
    encoding: string;
    mimetype: string;
    path: string;
    size: string;
    filename: string
}

interface IApplicationDocuments{
    emailAddress: string;
    participationAgreement: string;
    nyscCertificate: string;
    statementOfCertificate: string;
    validIdCard: string;
    admissionLetter: string;
    decagonParticipation: string;
    loanProcessing: string;
    applicationLetter: string;
    guarantorsStatementOfNetworth: string;
    indemnityForm: string;
    guarantorsIdCard: string
}










