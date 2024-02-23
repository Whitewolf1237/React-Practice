// to import a named export we need to name them in {}

import { LOGO_URL } from "../utils/constants";
import React, { useState,useEffect } from "react";


const Header=()=>{
    const [btnName,SetBtnName]=useState("Login")
    // let btnName="Login"

// if no dependency array useEffect is called on every component render 
// if dependency array is empty = []=> useEffect is called on initiail render(just once)
// if dependency array is [btnnameReact]=> called everytime btnNameReact is updated
useEffect(()=>{
    console.log("use effect")
})


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
