import ReactDOM from "react-dom/client";
import React from "react";
import { render } from "react-dom";

const Header=()=>{
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://logohistory.net/wp-content/uploads/2022/10/Gofood-logo.png" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const Restaurant_card=()=>{
    return (
        <div className="res-card">
            <h3>Meghna</h3>
        </div>
    )
}

const Body=()=>{
    return (
        <div className="body">
            <div className="Search">Search</div>
            <div className="res-container">
                <Restaurant_card />
            </div>
        </div>
    )
}

const AppLayout = ()=>{
    return (
        <div className="app">
        <Header />
        <Body />
        
        </div>
    )
}

const root=ReactDOM.createRoot(document.getElementById("root"))


// to render react component we will <Component_name />
root.render(<AppLayout />)
