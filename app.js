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
        <div className="res-card" style={{ backgroundColor:"#f0f0f0"}}>
            <img className="res-logo" alt="logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ldgjutok2ha7asc05p0q" />
            <h3>Meghna Foods</h3>
            <h4>Chole,North Indian</h4>
            <h4>4.4 stars</h4>
            <h4>38 mins</h4>
        </div>
    )
}

const Body=()=>{
    return (
        <div className="body">
            <div className="Search">Search</div>
            <div className="res-container">
                <Restaurant_card />
                <Restaurant_card />
                <Restaurant_card />
                <Restaurant_card />
                <Restaurant_card />
                <Restaurant_card />
                <Restaurant_card />
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
