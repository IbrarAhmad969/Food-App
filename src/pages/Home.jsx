import React, { useContext, useState } from "react";
import NavBar from "../components/Nav";
import Categories from "../Categories";
import Card from "../components/Card";
import { food_items } from "../food";
import DataContext from "../context/DataContext";
const Home = () => {

    let {newCategory, setNewCategory} = useContext(DataContext)

    function filterCategory(category){
        if(category === 'All'){
            setNewCategory(food_items)
        }
        else{
            let filteredData = food_items.filter((item)=> (item.food_category===category))
            setNewCategory(filteredData)
        }
    }

    return (
      <div className="bg-slate-200 w-full min-h-screen flex flex-col items-center">
        <NavBar />
        {/* Category Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-3 p-3 w-full max-w-5xl">
          {Categories.map((item) => (
            
            <button
              key={item.name}
              onClick={() =>filterCategory(item.name)}

              className="cursor-pointer flex flex-col items-center justify-center w-16 h-20 sm:w-20 sm:h-24 md:w-24 md:h-28 bg-white rounded-xl shadow-sm hover:shadow-md hover:bg-green-50 transition-all duration-200"
            >
              <span className="text-xl md:text-2xl mb-1">{item.icon}</span>
              <span className="text-[10px] sm:text-xs md:text-sm text-gray-700 font-semibold capitalize">
                {item.name}
              </span>
            </button>
          ))}
        </div>

        <div className="w-full max-w-6xl flex flex-wrap justify-center gap-4 sm:gap-5 p-4">
            {newCategory.map((item)=>(
                <Card name={item.food_name} image={item.food_image} id={item.id} type={item.food_type} price={item.price}/>
            ))}
        </div>
      </div>
    );
  };
export default Home;
