import React, { useState } from 'react'
import DataContext from './DataContext'
import { food_items } from '../food'

const DataContextProvider = ({children}) => {
  const[newCategory, setNewCategory] = useState(food_items)

  let [input, setInput] = useState("")

  let data={
    input, 
    setInput, 
    newCategory, 
    setNewCategory

  }
  return (
    <DataContext.Provider value={data}>
      {children}
    </DataContext.Provider>
  )
}

export default DataContextProvider
