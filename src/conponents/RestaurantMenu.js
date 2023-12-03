
import React, {useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import RestaurantMenuCards from './RestaurantMenuCards';

const RestaurantMenu = () => {
    const [resDetali , setResDetail] = useState([]);
    const [resMenu , setResMenu] = useState(null);
    const {resId}  = useParams();
    console.log(resId);

        const fetchMenu = async()=>{
            const data = await fetch(`https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.5940947&lng=85.1375645&restaurantId=${resId}`);
            const json = await data.json();
            console.log(json.data);
            setResDetail(json.data.cards[0]);
            setResMenu(json.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards)
            console.log(json.data.cards[0])
            console.log(json.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards)
        }

    useEffect(()=>{
        // fetching restaurant menu
        fetchMenu() 
    },[])

    if(resDetali.length === 0){
        return 'Login---';
    }
  return (
    <div className="flex justify-center pt-10">
    <div className=" w-[60%] h-full">
      <button
        onClick={() => window.history.back()}
        className=" p-2 m-4 font-bold border border-orange-500 hover:shadow-lg hover:border-orange-600"
      >
        BACK
      </button>
      <div className="flex justify-between items-center">
        <div className="p-2 m-2">
          <h1 className="text-2xl font-semibold">
            {resDetali.card?.card?.info?.name}
          </h1>
          <h1 className="text-sm pt-2 font-medium">
            {resDetali.card?.card?.info?.cuisines?.join(", ")}
          </h1>
          <h1 className="text-sm font-medium">
            {resDetali.card?.card?.info?.areaName}
          </h1>
          <h1 className="text-xs pt-2 text-gray-700 font-bold">
            🔴 High demand. Additional ₹15 delivery fee will apply to ensure
            better delivery
          </h1>
        </div>
        <div className="pr-3">
          <h1>⭐{resDetali.card?.card?.info?.avgRating} Rating</h1>
        </div>
      </div>

      {resMenu &&
        resMenu.map((data, index) => {
          return <RestaurantMenuCards key={index} item={data} />;
        })}
    </div>
  </div>

  )
}

export default RestaurantMenu;