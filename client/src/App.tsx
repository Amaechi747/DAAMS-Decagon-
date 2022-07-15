import { FC } from 'react';
import './App.css';
import { slide as Menu } from "react-burger-menu"
import { Routes, Route, Link } from "react-router-dom"
import { ApplicantsRegister, ApplicationProcedure, AboutProgramme } from "./pages"
import { ApplicantLogin } from './pages';
import { ApplicantDashboard, UploadDocuments, SampleDocuments, Instructions, OurResponse, Logout, WithdrawApplication } from './pages/ApplicantDashboard';
import { FcAbout, FcDocument, FcInfo, FcViewDetails } from "react-icons/fc";

import DecadevDashboard from './pages/DecadevDashboard/DecadevDashboard';
import { ProgressReport, Exeat, Retrospective, Updates } from './pages/DecadevDashboard';
import { Footer, Greeter } from "./components"


interface Props {

}

const App: FC<Props> = () => {
  return (
    <div>
      <Menu>
        <p className="memu-title"><Greeter /></p>
        <Link className="menu-item" to="/">
          <FcDocument />{" "}
          FORM
        </Link>

        <Link className="menu-item" to="/applicant-login">
          <FcViewDetails />{" "}
          LOGIN APPLICANTS
        </Link>

        <Link className="menu-item" to="/about-programme">
          <FcAbout />{" "}
          ABOUT PROGRAMME
        </Link>

        <Link className="menu-item" to="/application-procedure">
          <FcInfo />{" "}
          APPLICATION PROCEDURE
        </Link>
      </Menu>

      <Routes>
        <Route path="/" element={<ApplicantsRegister />} />
        <Route path="/applicant-login" element={<ApplicantLogin />} />
        <Route path="/application-procedure" element={<ApplicationProcedure />} />
        <Route path="/about-programme" element={<AboutProgramme />} />
        <Route path="/applicant-dashboard" element={<ApplicantDashboard />} />

        {/* Registering Applicant Dashboard Route */}
        <Route path="/upload-documents" element={<UploadDocuments />} />
        <Route path="/sample-documents" element={<SampleDocuments />} />
        <Route path="/instructions" element={<Instructions />} />
        <Route path="/our-response" element={<OurResponse />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/withdraw-application" element={<WithdrawApplication />} />

        <Route path="/decadev-dashboard" element={<DecadevDashboard />} />

        {/* Registering Applicant Dashboard Route */}
        <Route path="/progress-report" element={<ProgressReport />} />
        <Route path="/exeat" element={<Exeat />} />
        <Route path="/retrospective" element={<Retrospective />} />
        <Route path="/updates" element={<Updates />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
