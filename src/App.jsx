import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home"
import Nav from "./Components/Nav"
import Product from "./Components/Product";
import Cart from "./Components/Cart";

function App(){
  return(
    <>
      <BrowserRouter>
        <Nav/>
        <Routes>
        <Route path="/" Component={Home}/>
        <Route path="/card/:id" Component={Product}/>
        <Route path="/cart" Component={Cart}/>

        </Routes>
   </BrowserRouter>
      
    </>
    
  )
}

export default App