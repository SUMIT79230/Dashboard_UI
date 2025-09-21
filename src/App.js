import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/Pages/home";
import OrderList from "../src/Pages/orderList";
import ThemeProviderWrapper from "./theme/ThemeProviderWrapper";

function App() {
  return (
    <div className="App">
       <ThemeProviderWrapper>
      <BrowserRouter>
        <Routes>  
          <Route path = "/home"  element = {<Home />}/>
          <Route path = "/"  element = {<Home />}/>
          <Route path = "/orderList" element = {<OrderList />}/>
        </Routes>
      </BrowserRouter>
      </ThemeProviderWrapper>
    </div>
  );
}

export default App;
