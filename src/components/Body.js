import React, { useEffect } from "react";
import Restaurant_card from "./Restaurant_card";
import { useState } from "react";
import Shimmer from "./Shimmer";

const Body=()=>{

    // Local state variables
    const [listOfRestaurant,setListOfRestaurant] = useState([])

    useEffect(()=>{
        fetchData();
    });

    // API CALL     

    const fetchData= async ()=>{
        const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.61450&lng=77.30630&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    const json = await data.json();
    // optional chaining 
    setListOfRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    if(listOfRestaurant.length==0){
        return (<Shimmer />)
    }
    else{

    

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
}

export default Body