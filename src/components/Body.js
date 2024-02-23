import React, { useEffect } from "react";
import Restaurant_card from "./Restaurant_card";
import { useState } from "react";
import Shimmer from "./Shimmer";

const Body=()=>{

    // Local state variables
    const [listOfRestaurant,setListOfRestaurant] = useState([])
    const [filteredRestaurant,setFilteredRestaurant]=useState([])
    const [searchText,setSearchText]=useState()

    useEffect(()=>{
        fetchData();
    });

    // API CALL     

    const fetchData= async ()=>{
        const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5160459&lng=77.39686770000002&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    const json = await data.json();
    
    // optional chaining 
    setListOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }
    if (listOfRestaurant.length==0 ){
        <Shimmer /> 
    }
    else{
    // conditional Rendering  using ternary operator
    return (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input 
                        type="text" 
                        className="search-box" 
                        value={searchText} 
                        onChange={(e)=>{
                            setSearchText(e.target.value)
                        }}
                    />
                    <button 
                        onClick={()=>{
                            const filterRestaurant=listOfRestaurant.filter((res)=>
                            res.info.name.toLowerCase().includes(searchText.toLowerCase())
                            )
                            setFilteredRestaurant(filterRestaurant)
                        }}
                        >
                            Search
                    </button>
                </div>
                <button className="filter_btn" 
                onClick={()=>{
                    
                    const filteredList=listOfRestaurant.filter((res)=> res.info.avgRating >= 4.4);
                    setListOfRestaurant(filteredList)
                    }
                }
                >Top Rated Restaurant</button>
            </div>
            <div className="res-container">
                {filteredRestaurant.map((restaurant)=><Restaurant_card key={restaurant.info.id} resData={restaurant}/>)} 
            </div>
        </div>
    )
}
}


export default Body