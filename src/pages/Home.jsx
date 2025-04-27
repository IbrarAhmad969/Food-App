import React, { useContext, useState } from "react";
import NavBar from "../components/Nav";
import Categories from "../Categories";
import Card from "../components/Card";
import Card2 from "../components/Card2";
import { food_items } from "../food";
import { RxCross1 } from "react-icons/rx";

import DataContext from "../context/DataContext";
import { useSelector } from "react-redux";
import CartSummary from "../components/CartSummery";

const Home = () => {
  let { newCategory, setNewCategory, showCart, setShowCart } =
    useContext(DataContext);

  function filterCategory(category) {
    if (category === "All") {
      setNewCategory(food_items);
    } else {
      let filteredData = food_items.filter(
        (item) => item.food_category === category
      );
      setNewCategory(filteredData);
    }
  }

  let items = useSelector((state) => state.cart);

  let subTotal = items.reduce(
    (total, item) => total + item.qty * item.price,
    0
  );

  let deliveryFee = 20;
  let taxes = (subTotal * 0.5) / 100;

  let total = Math.floor(subTotal + deliveryFee + taxes);

  return (
    <div className="bg-slate-200 w-full min-h-screen flex flex-col items-center absolute">
      <NavBar />
      {/* Category Grid */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-3 p-3 w-full max-w-5xl">
        {Categories.map((item) => (
          <button
            key={item.name}
            onClick={() => filterCategory(item.name)}
            className="cursor-pointer flex flex-col items-center justify-center w-16 h-20 sm:w-20 sm:h-24 md:w-24 md:h-28 bg-white rounded-xl shadow-sm hover:shadow-md hover:bg-green-50 transition-all duration-200"
          >
            <span className="text-xl md:text-2xl mb-1">{item.icon}</span>
            <span className="text-[10px] sm:text-xs md:text-sm text-gray-700 font-semibold capitalize">
              {item.name}
            </span>
          </button>
        ))}
      </div>

      <div className="w-full max-w-6xl flex flex-wrap justify-center gap-2 sm:gap-5 p-4">
        {newCategory.length > 1 ? (
          newCategory.map((item) => (
            <Card
              name={item.food_name}
              image={item.food_image}
              id={item.id}
              type={item.food_type}
              price={item.price}
            />
          ))
        ) : (
          <div className="text-green-950 text-3xl font-black text-shadow"> No Dish Found </div>
        )}
      </div>

      {/* Show Cart Logic */}
      <div
        className={`bg-white w-[90%] sm:w-[400px] h-full fixed right-0 top-0 shadow-2xl transition-all duration-500 z-50 overflow-auto ${
          showCart ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <header className="flex justify-between items-center p-5 border-b">
          <span className="text-green-500 text-lg font-semibold">
            Order List
          </span>
          <RxCross1
            className="text-green-500 w-6 h-6 hover:text-gray-600 cursor-pointer"
            onClick={() => {
              setShowCart(false);
            }}
          />
        </header>

        {items.map((item) => (
          <Card2
            name={item.name}
            price={item.price}
            image={item.image}
            id={item.id}
            qty={item.qty}
          />
        ))}

        {items.length > 0 ? (
          <CartSummary
            subTotal={subTotal}
            deliveryCharges={deliveryFee}
            taxes={taxes}
            total={total}
          ></CartSummary>
        ) : (
          <div className="flex justify-center items-center h-full text-2xl text-green-500">
            Empty Cart{" "}
          </div>
        )}
      </div>
    </div>
  );
};
export default Home;
