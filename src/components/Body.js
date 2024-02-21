import ReactDOM from "react-dom/client";
import React from "react";
import Restaurant_card from "./Restaurant_card";
import resList from "../utils/mockData";

// From Spotify API 



const Body=()=>{
    return (
        <div className="body">
            <div className="Search">Search</div>
            <div className="res-container">
                {resList.map((restaurant)=><Restaurant_card key={restaurant.info.id} resData={restaurant}/>)} 
            </div>
        </div>
    )
}

export default Body