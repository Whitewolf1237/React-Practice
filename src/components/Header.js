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
        <div className="flex justify-between  shadow-lg px-2 bg-yell sm:bg-summer_green  ">
            <div className="logo-container">
                <img className="w-56" src={LOGO_URL} />
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-3">Online Status:{onlineStatus?"🟢":"🔴"}</li>
                    <li className="px-3"><Link to="/">Home</Link></li>
                    <li className="px-3"><Link to="/about">About Us</Link></li>
                    <li className="px-3"><Link to="/contact">Contact Us</Link></li>
                    <li className="px-3">Cart</li>
                    <button className="px-3 bg-peach rounded hover:shadow-xl" onClick={()=>{
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
