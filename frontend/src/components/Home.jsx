import React from 'react'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faLocust } from "@fortawesome/free-solid-svg-icons";



const Home = () => {
  function handleLogout() {
    alert('Logged Out successfully!');
  }
  
  return (
    <div style={{background:"darkgreen"}} className="container-fluid p-4 mt-5">
      <div className="container d-flex justify-content-between align-items-center">
        <div className="left-section">
          <b className="mr-4">
            <Link style={{textDecoration:"none",color:"#ffe4b5"}} to='/home' ><FontAwesomeIcon style={{color:"#e0ffff",marginRight:"10px"}} icon={faHouse} />HOME</Link>
          </b>
          <b>
            <Link style={{textDecoration:"none",marginLeft:"50px",color:"#ffe4b5"}} to='/about' ><FontAwesomeIcon style={{color:"#e0ffff",marginRight:"10px"}} icon={faLocust} />ABOUT</Link>
          </b>
        </div>
        <div className="right-section">
          <b className="mr-4">
            <Link style={{textDecoration:"none",color:"#ffe4b5"}} to='/profile' ><FontAwesomeIcon style={{color:"#e0ffff",marginRight:"10px"}} icon={faUser} />PROFILE</Link>
          </b>
          <Link style={{textDecoration:"none",marginLeft:"50px",color:"#ffe4b5"}} to='/login'  onClick={handleLogout}><FontAwesomeIcon style={{color:"#e0ffff",marginRight:"10px"}} icon={faRightFromBracket} />Logout</Link>
        </div>
      </div>
    </div>
  )
}


export default Home
