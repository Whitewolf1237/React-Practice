import React, { useEffect } from "react";
import Restaurant_card from "./Restaurant_card";
import { useState } from "react";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import { Link } from "react-router-dom";

const Body=()=>{

    // Local state variables
    const [listOfRestaurant,setListOfRestaurant] = useState([])
    const [filteredRestaurant,setFilteredRestaurant]=useState([])
    const [searchText,setSearchText]=useState()
    useEffect(()=>{
        fetchData();
    },[]);

    // API CALL     

    const fetchData= async ()=>{
        const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.61450&lng=77.30630&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    const json = await data.json();
    
    // optional chaining 
    setListOfRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

const onlineStatus=useOnlineStatus();
    if(onlineStatus==false){
        return <h1>Looks like you are offline</h1>
    }

    if (listOfRestaurant?.length===0){
        <Shimmer />
    }
    else{
    // conditional Rendering  using ternary operator
    return(
        <div className="body bg-yellow-100" >
            <div className="filter flex justify-between items-center">
                <div className="search m-4 p-4">
                    <input 
                        type="text" 
                        className="search-box border border-solid border-black rounded" 
                        value={searchText} 
                        onChange={(e)=>{
                            setSearchText(e.target.value)
                        }}
                    />
                        <button className="px-4 py-2 bg-pink-100 m-4 rounded hover:shadow-xl"
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
                    <button className="filter_btn px-4 py-2 m-4 bg-pink-100 rounded hover:shadow-xl" 
                    onClick={()=>{
                        
                        const filteredList=listOfRestaurant.filter(
                            (res)=> res.info.avgRating > 4.2);
                        setFilteredRestaurant(filteredList)
                        }
                    }
                    >Top Rated Restaurant</button>
                </div>
            </div>
            <div className="res-container flex flex-wrap">
                {filteredRestaurant.map((restaurant)=>(
                    <Link 
                        to={"/restaurants/"+ restaurant.info.id} 
                        key={restaurant.info.id}>
                            <Restaurant_card  resData={restaurant}/> 
                    </Link>
                ))} 
            </div>
        </div>
    )
}
}
export default Body