import { Link } from "react-router-dom"
import { slide as Menu } from "react-burger-menu"
import { FcUpload, FcList, FcKindle, FcFeedback, FcExternal, FcLeft } from "react-icons/fc";
import { Greeter } from "."

type Props = {}

const ApplicantsSidebar = (props: Props) => {
  return (
   <>
   <Menu>
    <p className="memu-title"><Greeter /></p>
    <Link className="menu-item" to="/upload-documents">
     <FcUpload />{" "}
     UPLOAD DOCUMENTS
    </Link>
    <Link className="menu-item" to="/sample-documents">
     <FcList />{" "}
     SAMPLE DOCUMENTS
    </Link>
    <Link className="menu-item" to="/instructions">
     <FcKindle />{" "}
     INSTRUCTIONS
    </Link>
    <Link className="menu-item" to="/our-response">
     <FcFeedback />{" "}
     OUR RESPONSE
    </Link>
    <Link className="menu-item" to="/logout">
     <FcExternal />{" "}
     LOGOUT
    </Link>
    <Link className="menu-item" to="/withdraw-application">
     <FcLeft />{" "}
     WITHDRAW APPLICATION
    </Link>
   </Menu>
  </>
  )
}

export default ApplicantsSidebar