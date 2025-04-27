import React from "react";
import image1 from "../assets/image1.avif";
import { LuLeafyGreen } from "react-icons/lu";
import { GiChickenOven } from "react-icons/gi";
import { useDispatch } from "react-redux";
import { Add_Item } from "../redux/CartSlice";
import CartSummary from "./CartSummery";
import { toast } from "react-toastify";

const Card = ({ name, image, price, id, type }) => {
  let dispatch = useDispatch()
  return (
    <div className="w-[186px] sm:w-[180px] md:w-[200px] 
  h-[260px] sm:h-[280px] md:h-[300px] 
  flex flex-col gap-2 rounded-2xl bg-white shadow-2xl hover:border border-green-200 p-1
  transition-all duration-300 ease-in-out">
      
      <div className="overflow-hidden w-full h-[50%]">
        <img
          className="h-full w-full object-cover rounded-2xl
            transition-transform duration-200 ease-in-out
            hover:scale-105 cursor-pointer hover:rounded-3xl"
          src={image}
          alt=""
        />
      </div>
  
      <p className="font-bold p-1 text-[15px]">{name}</p>
  
      <div className="p-1 flex justify-between">
        <div className="text-green-800">RS {price}/</div>
        <div className="flex gap-1 items-center">
          {type === "veg" ? (
            <LuLeafyGreen color="green" />
          ) : (
            <GiChickenOven color="green" />
          )}
          <p className="text-green-800">{type}</p>
        </div>
      </div>
  
      <button
        onClick={() => {
          dispatch(Add_Item({ id: id, name: name, price: price, image: image, qty: 1 }));
          toast("Item Added");
        }}
        className="w-full h-[34px] bg-green-800 text-white rounded-2xl hover:bg-green-500 cursor-pointer"
        type="button"
      >
        Add to Dish
      </button>
    </div>
  );  
};

export default Card;
