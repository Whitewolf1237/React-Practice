import ReactDOM from "react-dom/client";
import React from "react";
import Restaurant_card from "./Restaurant_card";
import resList from "../utils/mockData";
import { useState } from "react";

const Body=()=>{

    // Local state variables
    const [listOfRestaurant,setListOfRestaurant] = useState(resList)

    return (
        <div className="body">
            <div className="filter">
                <button className="filter_btn" 
                onClick={()=>{
                    
                    const filteredList=listOfRestaurant.filter((res)=> res.info.avgRating >= 4.4);
                    setListOfRestaurant(filteredList)
                    }
                }
                >Top Rated Restaurant</button>

                </div>
            <div className="res-container">
                {listOfRestaurant.map((restaurant)=><Restaurant_card key={restaurant.info.id} resData={restaurant}/>)} 
            </div>
        </div>
    )
}

export default Body