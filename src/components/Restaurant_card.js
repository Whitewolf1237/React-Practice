import ReactDOM from "react-dom/client";
import React from "react";

import { CDN_URL } from "../utils/constants";

const Restaurant_card=(props)=>{

    const { resData } =props;
    const{cloudinaryImageId,name,cuisines,avgRating,costForTwo,deliveryTime} = resData?.info;
    return (
        <div className="res-card m-4 p-4 w-52 rounded-lg bg-yell" >
            <img className="res-logo rounded-lg" src = {CDN_URL+cloudinaryImageId} alt = "res-logo" />
            <h3 className="font-bold text-center py-3 text-lg">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}⭐</h4>
            <h4>{costForTwo}</h4>
        </div>
    )
}

export default Restaurant_card