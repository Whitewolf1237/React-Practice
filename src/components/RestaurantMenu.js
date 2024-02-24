import React, { useState } from 'react'
import { useEffect } from 'react'
import Shimmer from "./Shimmer";


const RestaurantMenu = () => {

    const [resInfo,SetResInfo]=useState(null)

    useEffect(()=>{
        fetchMenu();
    })

    const fetchMenu= async ()=>{
        const data= await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.5160459&lng=77.39686770000002&restaurantId=424046&catalog_qa=undefined&submitAction=ENTER")
    const json = await data.json();
    console.log(json)
        SetResInfo(json.data)
    }

    if  (resInfo === null)  return <Shimmer />;

    const {name,cuisines,costForTwoMessage}=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards


return (
    <div className='Menu'>
        <h1>{name}</h1>
        <p>
            {cuisines.join(", ")}- {costForTwoMessage}
        </p>
        <h2>Menu</h2>
        <ul>
            <li>Biryani</li>
            <li>Burger</li>
            <li>Diet Coke</li>
        </ul>

    </div>
)
}

export default RestaurantMenu