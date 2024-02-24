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
        const data= await fetch("https://corsproxy.org/?https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Frestaurants%2Flist%2Fv5%3Flat%3D12.9351929%26lng%3D77.62448069999999%26page_type%3DDESKTOP_WEB_LISTING")
    const json = await data.json();
    
    // optional chaining 
    setListOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }
    // conditional Rendering  using ternary operator
    return listOfRestaurant.length===0?<Shimmer /> : (
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
export default Body