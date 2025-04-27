import React, { useContext, useEffect } from "react";
import { IoFastFoodOutline, IoSearch } from "react-icons/io5";
import { LuShoppingCart } from "react-icons/lu";

import DataContext from "../context/DataContext";
import { food_items } from "../food";
import { useSelector } from "react-redux";

function NavBar() {

    let {input, setInput, newCategory, setNewCategory, showCart, setShowCart} = useContext(DataContext)

    useEffect(()=>{
        let newListData = food_items.filter((item)=>item.food_name.includes(input) || item.food_name.toLocaleLowerCase().includes(input))
        setNewCategory(newListData)
    }, [input])

    let items = useSelector(state=> state.cart)
    


  return (
    <header className="w-full bg-slate-200/60 backdrop-blur-sm">
      <nav className="max-w-6xl mx-auto flex items-center justify-between p-4 sm:p-6">
        {/* Logo */}
        <a
          aria-label="Home"
          className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-md bg-white shadow"
        >
          <IoFastFoodOutline className="h-6 w-6 sm:h-7 sm:w-7 text-green-500 hover:cursor-pointer" />
        </a>

        {/* Search */}
        <form
        
        onSubmit={(e)=>e.preventDefault()}
        className="hidden md:flex flex-1 mx-4 max-w-md items-center gap-3 rounded-md bg-white px-4 py-2 shadow">
            
          <IoSearch className="h-5 w-5 shrink-0 text-green-500" />
          <input
            type="search"
            placeholder="Search here…"
            className="w-full text-sm outline-none placeholder:text-gray-400"
            onChange={(e)=>setInput(e.target.value)} 
            value={input}
          />
        </form>

        {/* Cart */}
        <button
          aria-label="Cart"
          className="relative flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-md bg-white shadow hover: cursor-pointer"
          onClick={()=>{setShowCart(true)}}
        >
          <span className="absolute -top-1 -right-1 rounded-full bg-green-500 px-[6px] text-[10px] font-bold text-white">
            {items.length}
          </span>
          <LuShoppingCart className="h-6 w-6 sm:h-7 sm:w-7 text-green-500 " />
        </button>
      </nav>

      {/* Mobile search bar (stacks below nav) */}
      <form className="flex md:hidden items-center gap-3 bg-white mx-4 mb-4 px-4 py-2 rounded-md shadow">
        <IoSearch className="h-5 w-5 shrink-0 text-green-500" />
        <input
          type="search"
          placeholder="Search here…"
          className="w-full text-sm outline-none placeholder:text-gray-400"
        />
      </form>
    </header>
  );
}

export default NavBar;
