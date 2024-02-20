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



const Restaurant_card=(props)=>{
    return (
        <div className="res-card" style={{ backgroundColor:"#f0f0f0"}}>
            <img className="res-logo" src = {props.reslogo} alt = "Restaurant Logo" />
            <h3>{props.resName}</h3>
            <h4>{props.cuisine}</h4>
            <h4>{props.rating}</h4>
            <h4>38 mins</h4>
        </div>
    )
}

const Body=()=>{
    return (
        <div className="body">
            <div className="Search">Search</div>
            <div className="res-container">
                <Restaurant_card reslogo="https://source.unsplash.com/1600x900/?food&1" resName="Meghna Food" cuisine="Chole,North Indian" rating="4.4⭐" />
                <Restaurant_card reslogo="https://source.unsplash.com/1600x900/?food&2" resName="KFC" cuisine="Burger,Fast Food" rating="4.7⭐" />
                <Restaurant_card reslogo="https://source.unsplash.com/1600x900/?coffee&3" resName="Starbucks" cuisine="coffee" rating="4.8⭐"/>
                <Restaurant_card reslogo="https://source.unsplash.com/1600x900/?coffee&4" resName="NecCafe" cuisine="coffee" rating="4.7⭐" />
                <Restaurant_card reslogo="https://source.unsplash.com/1600x900/?pizza&5" resName="PizzaHut" cuisine="Pizza" rating="4.9⭐" />
                <Restaurant_card reslogo="https://source.unsplash.com/1600x900/?pizza&6" resName="Dominos" cuisine="Pizza" rating="4.8⭐" />
                <Restaurant_card reslogo="https://source.unsplash.com/1600x900/?food&7" resName="Mamta Foods" cuisine="Street Food" rating="4.6⭐" />
                <Restaurant_card reslogo="https://source.unsplash.com/1600x900/?food&8" resName="Bru" cuisine="coffee" rating="4.8⭐" />
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
