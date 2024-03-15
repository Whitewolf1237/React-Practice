import ReactDOM from "react-dom/client";
import React from "react";

import { CDN_URL } from "../utils/constants";

const Restaurant_card=(props)=>{

    const { resData } =props;
    const{cloudinaryImageId,name,cuisines,avgRating,costForTwo,deliveryTime} = resData?.info;
    return (
        <div className="res-card m-4 p-4 w-52 h-96 rounded-lg bg-green-200 flex flex-col " >
            <img className="res-logo rounded-lg" src = {CDN_URL+cloudinaryImageId} alt = "res-logo" />
            <h3 className="font-bold text-center py-2 text-sm">{name}</h3>
            <h4 className="text-sm">{cuisines.join(", ")}</h4>
            {/* <div className="flex  "> */}
                <h4 className="text-sm bg-pink-50 rounded border border-black m-auto">{avgRating}⭐</h4>
                <h4 className="text-sm m-auto">{costForTwo}</h4>
            </div>
        // </div>
    )
}

export default Restaurant_card