import { useParams } from 'react-router-dom';
// import Shimmer from './Shimmer';
import useRestaurantMenu from '../utils/useRestaurantmenu';
import ShimmerMenu from './ShimmerMenu';
import { CDN_URL } from '../utils/constants';
import { FiClock } from 'react-icons/fi';
import { AiOutlineStar } from 'react-icons/ai';
import React from 'react';

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <ShimmerMenu />;

  const {
    name,
    cuisines,
    costForTwoMessage,
    cloudinaryImageId,
    avgRating,
    deliveryTime,
    totalRatingsString,
  } = resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  console.log(itemCards);

  const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=>c.card?.["@type"] == 'type.googleapis.com/swiggy.presentation.food.v2.Dish')
  console.log(categories)

  return (
    <div className="menu border border-black m-4 px-60 flex flex-col rounded-lg  ">
      <header className="menu-header">
        {/* <div className="menu-header-left ">
          <img className='w-52 h-52 ' src={CDN_URL + cloudinaryImageId} alt="Restaurent Info" />
        </div> */}
        <div className="menu-header-right">
          <div className="top">
            <h1 className='font-bold font-serif py-2'>{name}</h1>
          </div>
          <div className="bottom">
              <div className='flex justify-between'>
                <h3 className='text-gray-400 py-4'>{cuisines.join(', ')}</h3>
                  <div className='border rounded-lg flex flex-col items-center p-2 shadow-sm'>
                  <h4 className="avg-rating">
                    <span className='text-yellow-400  '>⭐{avgRating}</span>
                  </h4>
                  <h4 className='text-gray-400'>{totalRatingsString}</h4>
                  </div>
                </div>
              <h3 className='text-gray-400'>{costForTwoMessage}</h3>
          </div>
        </div>
      </header>
    <hr className='bg-gray-500 my-4'/>
      <div className="menu-main" >
        <h2 className='font-bold font-serif underline'>Menu</h2>
        <h3 className="items font-semibold font-mono">{itemCards.length} items</h3>
        <div className="menu-main-card-container ">
          {itemCards.map((item) => (
            <div key={item.card.info.id} className="menu-card flex flex-col flex-wrap my-4">
                <div className='flex flex-row justify-between'>
                  <hr className='bg-gray-500 my-4'/>
                    <div className="menu-card-left px-3 text-center">
                      <h2 className="menu-name font-serif font-bold">{item.card.info.name}</h2>
                      <h3 className="menu-price font-serif py-1">
                        ₹
                        {item.card.info.price / 100 ||
                          item.card.info.defaultPrice / 100}
                      </h3>
                      <h4 className="menu-description text-gray-500 py-3">
                        {item.card.info.description}
                      </h4>
                    </div>
                    <div className="menu-card-right">
                      <img className='relative max-w-md max-h-md  rounded-lg overflow-hidden p-1' src={CDN_URL + item.card.info.imageId} alt="Menu Info" />
                    </div>
                    
              </div>
              <hr className='bg-gray-500 my-4'/>
            </div>
          ))}

          {/* <li>{itemCards[0].card.info.name}</li>
        <li>{itemCards[1].card.info.name}</li>
        <li>{itemCards[2].card.info.name}</li> */}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;