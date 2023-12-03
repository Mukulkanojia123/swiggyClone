import React from 'react'
import { IMG_LINK } from '../utils/imageLink';

const RestaurantsCards = ({ card }) => {
    console.log(card);
    return (
        <div className='w-[300px] h-[370px] m-3'>
            <div className='flex justify-center pt-4'>
                <img className='w-[250px] h-[200px]'
                    src={IMG_LINK + card?.info?.cloudinaryImageId} />
            </div>
            <div className='px-5'>
                <h1 className='p-2 font-semibold text-base'>{card?.info?.name}</h1>
                <h1 className='p-1 text-xs'>{card?.info?.cuisines.join(',')}</h1>

                <div className="flex pt-4 justify-between">
                    <h1 className="text-xs font-medium">⭐{card?.info?.avgRating}</h1>
                    <h1 className="text-xs font-medium">&#9672;</h1>
                    <h1 className="text-xs font-medium">{card?.info?.sla?.deliveryTime}mins</h1>
                    <h1 className="text-xs font-medium" >&#9672;</h1>
                    <h1 className="text-xs font-medium">{card?.info?.costForTwo}</h1>
                </div>

                <div className="flex pt-4" >
                    <p className="text-sm font-medium pr-3 text-red-800">🏷{card?.info?.aggregatedDiscountInfoV3?.header}</p>
                    <p className=" text-sm font-medium  text-red-800">{card?.info?.aggregatedDiscountInfoV3?.subHeader}</p>
                </div>
            </div>
        </div>
    )
}

export default RestaurantsCards