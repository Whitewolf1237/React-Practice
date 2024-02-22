// to import a named export we need to name them in {}

import { LOGO_URL } from "../utils/constants";
import React, { useState } from "react";


const Header=()=>{
    const [btnName,SetBtnName]=useState("Login")
    // let btnName="Login"

    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button className="login" onClick={()=>{SetBtnName("Logout")}}>{btnName}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;
