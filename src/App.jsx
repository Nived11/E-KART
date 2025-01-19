import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home"
import Nav from "./Components/Nav"
import Product from "./Components/Product";

function App(){
  return(
    <>
      <BrowserRouter>
        <Nav/>
        <Routes>
        <Route path="/" Component={Home}/>
        <Route path="/card/:id" Component={Product}/>


        </Routes>
   </BrowserRouter>
      
    </>
    
  )
}

export default App