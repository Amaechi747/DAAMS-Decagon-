import * as React from 'react';
import { AiOutlineDownload } from "react-icons/ai"
import { saveAs } from "file-saver";
import { ApplicantsSidebar } from "../../components"


interface ISampleDocumentsProps {
}

const SampleDocuments: React.FunctionComponent<ISampleDocumentsProps> = (props) => {
  const download1 = () => {
    saveAs(
      "https://res.cloudinary.com/bloomhub/image/upload/v1656971085/GURANTORS_BVN_REQUEST_STERLING_BANK_APPROVED_1_evavg6.pdf",
      "example.pdf"
    );
  };
  const download2 = () => {
    saveAs(
      "https://res.cloudinary.com/bloomhub/image/upload/v1656971085/Health_Waiver_Decadevs_qkapuj.pdf",
      "example.pdf"
    );
  };
  const download3 = () => {
    saveAs(
      "https://res.cloudinary.com/bloomhub/image/upload/v1656971084/SIGNED_ACCEPTANCE_LETTER_st1qne.pdf",
      "example.pdf"
    );
  };
  const download4 = () => {
    saveAs(
      "https://res.cloudinary.com/bloomhub/image/upload/v1656971084/SAMPLE_CFA__1_queoql.pdf",
      "example.pdf"
    );
  };
  const download5 = () => {
    saveAs(
      "https://res.cloudinary.com/bloomhub/image/upload/v1656971085/LOAN_PROCESSING_PROCEDURE_p2vls1.pdf",
      "example.pdf"
    );
  };
  const download6 = () => {
    saveAs(
      "https://res.cloudinary.com/bloomhub/image/upload/v1656971084/SIGNED_PARTICIPATION_AGREEMENT_FORM_rpwibp.pdf",
      "example.pdf"
    );
  };
  const download7 = () => {
    saveAs(
      "https://res.cloudinary.com/bloomhub/raw/upload/v1656971085/Letter_of_Commitment_to_repa_principal_and_interest_nbvezu.docx",
      "example.pdf"
    );
  };
  const download8 = () => {
    saveAs(
      "https://res.cloudinary.com/bloomhub/image/upload/v1656971084/Reference_Form_ggipoz.pdf",
      "example.pdf"
    );
  };
  const download9 = () => {
    saveAs(
      "https://res.cloudinary.com/bloomhub/image/upload/v1656971084/SIGNED_APPLICATION_FOR_LOAN_ukes7z.pdf",
      "example.pdf"
    );
  };
  const download10 = () => {
    saveAs(
      "https://res.cloudinary.com/bloomhub/image/upload/v1656971084/SIGNED_APPLICATION_FOR_LOAN_ukes7z.pdf",
      "example.pdf"
    );
  };
  const download11 = () => {
    saveAs(
      "https://res.cloudinary.com/bloomhub/image/upload/v1656971084/SAMPLE_OFFER_LETTER__1_mc1nyw.pdf",
      "example.pdf"
    );
  };
  const download12 = () => {
    saveAs(
      "https://res.cloudinary.com/bloomhub/image/upload/v1656971083/Reference_Form_Sample_p7anhm.pdf",
      "example.pdf"
    );
  };
  const download13 = () => {
    saveAs(
      "https://res.cloudinary.com/bloomhub/image/upload/v1656971083/SIGNED-GUARNTEE_AND_INDEMNITY_FORM_h8khbi.pdf",
      "example.pdf"
    );
  };
  const download14 = () => {
    saveAs(
      "https://res.cloudinary.com/bloomhub/image/upload/v1656971083/SIGNED_REFERENCE_LETTER_rne19w.pdf",
      "example.pdf"
    );
  };
  const download15 = () => {
    saveAs(
      "https://res.cloudinary.com/bloomhub/image/upload/v1656971083/STATEMENT_OF_PERSONAL_NETWORTH_zzaszt.pdf",
      "example.pdf"
    );
  };
  const download16 = () => {
    saveAs(
      "https://res.cloudinary.com/bloomhub/image/upload/v1656971082/SELF_SPONSORSHIP_PROCEDURE_rnmpdm.pdf",
      "example.pdf"
    );
  };
  const download17 = () => {
    saveAs(
      "https://res.cloudinary.com/bloomhub/raw/upload/v1656971082/Letter_of_Commitment_to_repa_principal_and_interest_1_m818mj.docx",
      "example.pdf"
    );
  };
  const download18 = () => {
    saveAs(
      "https://res.cloudinary.com/bloomhub/image/upload/v1656970506/LOAN_PROCESSING_PROCEDURE_strnqe.pdf",
      "example.pdf"
    );
  };
  return (
    <>
      <ApplicantsSidebar />
      <section>

        <div>
          <h1>Download the Sample Documents</h1>
          <div className="sample">
            <div className="sample-left">
              <p>
                GURANTORS BVN REQUEST STERLING BANK {" "}
                <button onClick={download1}><AiOutlineDownload /></button>
              </p>

              <p>
                HEALTH WAIVER DECADEVS{" "}
                <button onClick={download2}><AiOutlineDownload /></button>
              </p>


              <p>
                SIGNED ACCEPTANCE LETTER {" "}
                <button onClick={download3}><AiOutlineDownload /></button>
              </p>
              <p>
                SAMPLE CFA {" "}
                <button onClick={download4}><AiOutlineDownload /></button>
              </p>
              <p>
                LOAN PROCESSING PROCEDURE {" "}
                <button onClick={download5}><AiOutlineDownload /></button>
              </p>
              <p>
                SIGNED PARTICIPATION AGREEMENT FORM {" "}
                <button onClick={download6}><AiOutlineDownload /></button>
              </p>
              <p>
                LETTER OF COMMITMENT TO REPAY PRINCIPAL AND INTEREST{" "}
                <button onClick={download7}><AiOutlineDownload /></button>
              </p>

              <p>
                REFERENCE FORM{" "}
                <button onClick={download8}><AiOutlineDownload /></button>
              </p>

              <p>
                SIGNED APPLICATION FOR LOAN {" "}
                <button onClick={download9}><AiOutlineDownload /></button>
              </p>
              <p>
                SIGNED APPLICATION FOR LOAN {" "}
                <button onClick={download10}><AiOutlineDownload /></button>
              </p>
            </div>
            <div className="sample-right">
              <p>
                SAMPLE OFFER LETTER {" "}
                <button onClick={download11}><AiOutlineDownload /></button>
              </p>

              <p>
                REFERENCE FORM SAMPLE{" "}
                <button onClick={download12}><AiOutlineDownload /></button>
              </p>


              <p>
                SIGNED GUARNTEE AND INDEMNITY FORM {" "}
                <button onClick={download13}><AiOutlineDownload /></button>
              </p>
              <p>
                SIGNED REFERENCE LETTER {" "}
                <button onClick={download14}><AiOutlineDownload /></button>
              </p>
              <p>
                STATEMENT OF PERSONAL NETWORTH {" "}
                <button onClick={download15}><AiOutlineDownload /></button>
              </p>
              <p>
                SELF SPONSORSHIP PROCEDURE {" "}
                <button onClick={download16}><AiOutlineDownload /></button>
              </p>
              <p>
                LETTER OF COMMITMENT TO REPAY PRINCIPAL and INTEREST{" "}
                <button onClick={download17}><AiOutlineDownload /></button>
              </p>

              <p>
                LOAN PROCESSING PROCEDURE {" "}
                <button onClick={download18}><AiOutlineDownload /></button>
              </p>
            </div>
          </div>
        </div>

      </section>
    </>
  );
};

export default SampleDocuments;
