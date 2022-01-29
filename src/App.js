import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Customer from "./pages/Customer/Customer";
import About from "./pages/About/About";
import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";
import appReducer from "./Redux/Reducer/User";
import Edit_Customer from "./pages/Edit_Customer/Edit_Customer";
import style from "./App.module.css";
import Booking from "./pages/Booking/Booking";

const App = () => {
  const root = combineReducers({
    data: appReducer,
  });

  const store = createStore(root);

  return (
    <div className={style.container}>
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/customer" element={<Customer />} />
            <Route path="/update/:id" element={<Edit_Customer />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Router>
      </Provider>
    </div>
  );
};

export default App;
