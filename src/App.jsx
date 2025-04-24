import './App.css'
import DataContextProvider from './context/DataContextProvider'
import Home from './pages/Home'

function App() {

  return (
   <div>
   <DataContextProvider>
   <Home></Home>
   </DataContextProvider>
   </div>
  )
}

export default App
