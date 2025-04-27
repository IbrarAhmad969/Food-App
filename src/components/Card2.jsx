import React from "react";
import image1 from "../assets/image1.avif";
import { useDispatch } from "react-redux";
import { DecrementQuantity, IncrementQuantity, remove_Item } from "../redux/CartSlice";

const Card2 = ({name, id, price, image, qty}) => {
  let dispatch = useDispatch();

  return (
    <div className="bg-white shadow-2xl rounded-2xl p-4 mx-2 flex flex-col sm:flex-row items-center justify-between w-full max-w-2xl gap-4 mb-1.5">
      {/* Left Section */}
      <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
        <img
          src={image}
          alt="Food Item"
          className="w-24 h-24 rounded-xl object-cover"
        />
        <div className="flex flex-col items-center sm:items-start gap-2">
          <p className="font-semibold text-lg text-center sm:text-left">{name}</p>
          <div className="flex items-center gap-2">
            <button onClick={()=>dispatch(qty>1 ? DecrementQuantity(id): null) } className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-xl font-bold hover:bg-gray-300">-</button>
            <p className="text-md font-medium">{qty}</p>
            <button onClick={()=>dispatch(IncrementQuantity(id)) }  className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-xl font-bold hover:bg-gray-300">+</button>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex flex-row sm:flex-col items-center sm:items-end gap-2 w-full sm:w-auto justify-between">
        <p className="text-green-600 font-semibold text-lg">Rs {price}</p>
        <button className="text-red-500 text-sm hover:underline"
        onClick={()=>dispatch(remove_Item(id))}

        >Delete</button>
      </div>



    </div>
  );
};

export default Card2;
