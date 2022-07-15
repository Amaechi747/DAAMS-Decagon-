import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios"
import swal from "sweetalert"
import { useNavigate } from "react-router-dom"
import {ApplicantsSidebar} from "../../components"

interface Props {
}

interface FormValues {
  participationAgreement: any;
  nyscCertificate: any;
  statementOfCertificate: any;
  validIdCard: any
  admissionLetter: any;
  decagonParticipation: any;
  loanProcessing: any;
  applicationLetter: any;
  guarantorsStatementOfNetworth: any;
  indemnityForm: any;
  guarantorsIdCard: any;
};


const UploadDocuments: React.FunctionComponent<Props> = (props) => {
  const navigate = useNavigate();
  const {
    register,
    control,
    watch,
    handleSubmit,
    formState: { errors }
  } = useForm<FormValues>();

  const submitForm = (data: FormValues) => {
    console.log(data)


    axios.post("http://localhost:5000/applicants/upload", data)

      .then(res => {

        console.log(res.data)

        swal("Good job", "Thank you for the Submission", "success")

        // navigate("/applicant-login")

      })

      .catch(function (error) {

        console.log(error)

        swal("Couldn't register applicant", "Please input or check all fields properly", "error")
      })
  }
  return (
    <>
      <ApplicantsSidebar />

      <div className="upload-documents">
        <div className="upload-left">
          <form className="register-form" onSubmit={handleSubmit(submitForm)}>
            <p>Signed Decagon Participation Agreement?</p>
            <input required placeholder="Signed Decagon Participation Agreement" type="file" {...register("participationAgreement")} />

            <p>NYSC Certificate/Exemption Certificate ( Original and two photocopies)</p>
            <input required placeholder="NYSC Certificate/Exemption Certificate ( Original and two photocopies" type="file" {...register("nyscCertificate")} />

            <p>University certificate/statement of results ( Original and two photocopies )</p>
            <input required placeholder="University certificate/statement of results ( Original and two photocopies )" type="file" {...register("statementOfCertificate")} />

            <p> Photocopy of Valid ID Card i.e either of these: Driver license, NIN, International Passport, Permanent voters card. (It must not be expired)</p>
            <input required placeholder="Photocopy of Valid ID Card i.e either of these: Driver license, NIN, International Passport, Permanent voters card. (It must not be expired)" type="file" {...register("validIdCard")} />

            <p>Decagon Admission Letter</p>
            <input required placeholder="Decagon Admission Letter" type="file" {...register("admissionLetter")} />

            <p>Reference letter for loan processing</p>
            <input required placeholder="Reference letter for loan processing" type="file" {...register("loanProcessing")} />


            <p>Loan Application Letter</p>
            <input required placeholder="Loan Application Letter" type="file" {...register("applicationLetter")} />

            <p>Signed Guarantor's Notarized Statement of net worth with a passport photograph attached (Original i.e physically signed copy) </p>
            <input required placeholder="Signed Guarantor's Notarized Statement of net worth with a passport photograph attached (Original i.e physically signed copy)" type="file" {...register("guarantorsStatementOfNetworth")} />

            <p>All pages of the Signed Personal guarantee and Indemnity form (Original i.e physically signed copy)</p>
            <input required placeholder="All pages of the Signed Personal guarantee and Indemnity form (Original i.e physically signed copy)" type="file" {...register("indemnityForm")} />

            <p>Photocopy of Guarantor's Valid ID (i.e either of these: Drivers license, NIN, International Passport, Permanent voters card) </p>
            <input required placeholder="Photocopy of Guarantor's Valid ID (i.e either of these: Drivers license, NIN, International Passport, Permanent voters card)" type="file" {...register("guarantorsIdCard")} />

            <input required type="submit" />
          </form>
        </div>

        <div className="upload-right">
          <p style={{ paddingLeft: '5rem' }}>
            Other Form Links
          </p>

          <p>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSe1ImgY_zyIYV6hsyju0mqRjxLcX-nyq2doIfZXNwrBE9ubPg/viewform">Sterling bank account details</a>

          </p>

          <p>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSegbsf-HOMXIIJEvGiZklT0g-hhhujBtR8vuO0850WLfBsWeg/viewform">Sterling Bank Loan Application Documents</a>

          </p>

          <p>
            <a
              href="Link:https://docs.google.com/forms/d/e/1FAIpQLSc3FnKp8ssq0aclHS_5NGb9lEo9tBSlUScwn4-piap_WKEoXw/viewform.">CREDIT REPORT FORM</a>
          </p>
          <p>
            <a
              href="Link:https://docs.google.com/forms/d/e/1FAIpQLSe1ImgY_zyIYV6hsyju0mqRjxLcX-nyq2doIfZXNwrBE9ubPg/viewform." >Sterling bank account details
            </a>
          </p>
          <p>
            <a href="Link:https://sterlingonlineaccount.sterling.ng/#/GetStarted.">Account opening</a>
          </p>
          <p>
            <a
              href="Link:https://docs.google.com/forms/d/e/1FAIpQLSd9pgJQuioi_chIi680S3B0k0SVgO5Psdv6dYSsUGvenOkeRw/viewform.">Commitment letter to Repay Loan and Interest
            </a>
          </p>
          <p>
            <a
              href="Link:https://docs.google.com/forms/d/e/1FAIpQLSeAPyqaaz23OFyTAm254vzIww2svyGn5S8vPDt2LMxnpa-EJg/viewform.">Letter Of Non-Indebtedness</a>
          </p>
          <p>
            <a
              href="Link:https://docs.google.com/forms/d/e/1FAIpQLSfekpUyqCUPW123qx2cjVhnbrFZAJQlKNA6hTdzV4RWdlcVAg/viewform.">SELF SPONSORSHIP DATA  </a>
          </p>
          <p>
            <a
              href="Link:https://docs.google.com/forms/d/e/1FAIpQLSd9pgJQuioi_chIi680S3B0k0SVgO5Psdv6dYSsUGvenOkeRw/viewform.">Commitment letter to Repay Loan and Interest
            </a>
          </p>
          <p>
            <a
              href="Link:https://docs.google.com/forms/d/e/1FAIpQLSebapMR9ydZajkeRxsTDaQrdWXvI6h78wiWGpvb_QGRQr512w/closedform.">Bank Information Form
            </a>
          </p>
          <p>
            <a
              href="Link:https://docs.google.com/forms/d/e/1FAIpQLSe8WXHTcEOw_Ut33kJ9oApQXRuGZHYDbzpS7P9QHDvkW7vf1Q/closedform.">Student Information Form</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default UploadDocuments;
