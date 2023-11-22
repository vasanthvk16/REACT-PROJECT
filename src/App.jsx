import { RouterProvider } from "react-router-dom";
import { createBrowserRouter,createRoutesFromElements,Route } from "react-router-dom";
import React from 'react'
import Layout from "./Components/Layout";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import About from "./Components/About";
import Contact from "./Components/Contact";

const route=createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Signup" element={<Signup/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Contact" element={<Contact/>}/>
    </Route>
  )
)
const App = () => {
  return (
    <div>
      <RouterProvider router={route}/>
    </div>
  )
}
export default App;
