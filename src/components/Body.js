import React, { useEffect } from "react";
import Restaurant_card from "./Restaurant_card";
import { useState } from "react";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";

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

const onlineStatus=useOnlineStatus();
    if(onlineStatus==false){
        return <h1>Looks like you are offline</h1>
    }


    // conditional Rendering  using ternary operator
    return listOfRestaurant.length===0?<Shimmer /> : (
        <div className="body bg-peach" >
            <div className="filter flex justify-between items-center">
                <div className="search m-4 p-4">
                    <input 
                        type="text" 
                        className="search-box border border-solid border-black" 
                        value={searchText} 
                        onChange={(e)=>{
                            setSearchText(e.target.value)
                        }}
                    />
                        <button className="px-4 py-2 bg-pinky m-4 rounded "
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
                <div>
                    <button className="filter_btn px-4 py-2 m-4 bg-pinky rounded" 
                    onClick={()=>{
                        
                        const filteredList=listOfRestaurant.filter((res)=> res.info.avgRating > 4.3);
                        setListOfRestaurant(filteredList)
                        }
                    }
                    >Top Rated Restaurant</button>
                </div>
            </div>
            <div className="res-container flex flex-wrap ">
                {filteredRestaurant.map((restaurant)=><Restaurant_card key={restaurant.info.id} resData={restaurant}/>)} 
            </div>
        </div>
    )
}
export default Body