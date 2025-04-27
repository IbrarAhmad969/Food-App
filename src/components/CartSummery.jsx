import React from "react";
import { toast } from "react-toastify";


const CartSummary = ({subTotal, deliveryCharges, taxes, total}) => {
  return (
    <div className="bg-white shadow-xl rounded-2xl p-6 w-full max-w-2xl mt-4">
      <div className="flex justify-between mb-2">
        <p className="text-gray-700 font-medium">Sub Total</p>
        <p className="font-semibold">Rs {subTotal}</p>
      </div>
      <div className="flex justify-between mb-2">
        <p className="text-gray-700 font-medium">Delivery Charges</p>
        <p className="font-semibold">Rs {deliveryCharges}</p>
      </div>
      <div className="flex justify-between mb-4">
        <p className="text-gray-700 font-medium">Taxes</p>
        <p className="font-semibold">Rs {taxes}</p>
      </div>
      <hr className="my-2" />
      <div className="flex justify-between mb-4">
        <p className="text-xl font-bold">Total</p>
        <p className="text-xl font-bold">Rs {total}</p>
      </div>
      <button
      onClick={()=> {toast.success("Order Placed ")}}
      className="w-full bg-green-600 hover:bg-green-700 cursor-pointer text-white py-2 rounded-xl font-semibold text-lg">
        Place Order
      </button>
    </div>
  );
};

export default CartSummary;
