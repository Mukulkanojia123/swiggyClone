import React, { useEffect } from "react";
import { IMG_LINK } from "../utils/imageLink";
import { useDispatch } from "react-redux";
// import { addItem, removeItem } from "../utils/redux/cartSlice";
// import { FaMinus, FaPlus } from "react-icons/fa";

// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

const RestaurantMenuCards = (props) => {
  let dispatch = useDispatch(); //global dispatch

  //disptaching an action in a button click function to add items in store
  //added tostify also
//   function addFoodItems(data) {
//     dispatch(addItem(data?.card?.info));
//     toast.success("Item Added To Cart",{
//       position: "top-left",
      
//     });
//   }

  //disptaching an action in a button click function to removeadd items in store
  //added tostify also
//   function removeFoodItems() {
//     dispatch(removeItem());
//     toast.error("Item Removed From Cart",{
//       position: "top-left"
      
//     });
//   }

  return (
    <div>
      <div>
        <h1 className="p-2 m-2 text-xl font-bold hover:underline">
          {props?.item?.card?.card?.title}{" "}
          {/* data direct comming from prop which is already looped   */}
        </h1>

        {/* again looping because itemCards is also an array */}
        {props?.item?.card?.card?.itemCards &&
          props.item.card.card.itemCards.map((itemCard, index) => (
            <>
              <div
                className=" p-2 m-2 flex justify-between items-center "
                key={index}
              >
                <div>
                  <h2 className="text-base font-semibold">
                    {itemCard.card.info.name}
                  </h2>
                  <p className="text-sm font-medium">
                    {" "}
                    {itemCard.card.info.price / 100}:₹
                  </p>
                  <p className="text-sm font-light ">
                    {itemCard.card.info.description}
                  </p>
                </div>
                <div className="flex justify-center items-center">
                  {/* <button
                    onClick={() => removeFoodItems(itemCard)}
                    className="border border-orange-500 rounded-full p-1 m-1 hover:shadow-xl"
                  >
                    <FaMinus />
                  </button> */}
                  <img
                    className="w-32"
                    src={IMG_LINK + itemCard.card.info.imageId}
                  />
                  {/* <button
                    onClick={() => addFoodItems(itemCard)}
                    className=" border border-orange-500 rounded-full p-1 m-1 hover:shadow-xl "
                  >
                    <FaPlus />
                  </button> */}
                </div>
              </div>
              <hr></hr>
            </>
          ))}
      </div>
      {/* <ToastContainer /> Tostify added  */}
    </div>
  );
};

export default RestaurantMenuCards;