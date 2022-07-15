import React, { FC } from 'react'
import { slide as Menu } from "react-burger-menu"
import { Routes, Route, Link } from "react-router-dom"
import { BiHomeAlt, BiBookBookmark, BiLogInCircle, BiLaptop, BiPaperPlane, BiUser, BiMedal, BiLogOutCircle } from "react-icons/bi"
import Greeter from "../../components/Greeter"

interface Props { }

const DecadevDashboard: FC<Props> = () => {
 //  Room Allocation
 // My Performance
 // Retrospective
 // Make A Request
 // Exeat
 // Anonymous Tip
 // Logout
 return (
  <>
   <Menu>
    <p className="decadev-title"><Greeter />{" "}</p>
    
    <br />
    <Link className="menu-item" to="/progress-report">
     <BiLogInCircle />{" "}
     PROGRESS REPORT
    </Link>
    <Link className="menu-item" to="/instructions">
     <BiBookBookmark />{" "}
     RETROSPECTIVE
    </Link>
    <Link className="menu-item" to="/updates">
     <BiBookBookmark />{" "}
     UPDATES
    </Link>
    <Link className="menu-item" to="/exeat">
     <BiBookBookmark />{" "}
     EXEAT
    </Link>
    <Link className="menu-item" to="/withdraw-application">
     <BiBookBookmark />{" "}
     LOGOUT
    </Link>
   </Menu>
  </>
 )
}

export default DecadevDashboard