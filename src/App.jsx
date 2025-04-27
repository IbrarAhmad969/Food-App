import { Provider } from "react-redux";
import "./App.css";
import DataContextProvider from "./context/DataContextProvider";
import Home from "./pages/Home";
import { store } from "./redux/store";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div>
      <Provider store={store}>
      <DataContextProvider>
        <Home></Home>
        <ToastContainer />
      </DataContextProvider>
      </Provider>
    </div>
  );
}

export default App;
