// to import a named export we need to name them in {}

import { LOGO_URL } from "../utils/constants";
import React, { useState, } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header=()=>{
    const [btnName,SetBtnName]=useState("Login")
    // let btnName="Login"

// if no dependency array useEffect is called on every component render 
// if dependency array is empty = []=> useEffect is called on initiail render(just once)
// if dependency array is [btnnameReact]=> called everytime btnNameReact is updated
    const onlineStatus=useOnlineStatus()


    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Online Status:{onlineStatus?"🟢":"🔴"}</li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li>Cart</li>
                    <button className="login" onClick={()=>{
                        btnName=="Login"
                        ?SetBtnName("Logout")
                        :SetBtnName("Login")
                        }}>
                            {btnName}
                            </button>
                </ul>
            </div>
        </div>
    )
}

export default Header;
