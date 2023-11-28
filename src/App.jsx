import { RouterProvider } from "react-router-dom";
import { createBrowserRouter,createRoutesFromElements,Route } from "react-router-dom";
import React from 'react'
import Layout from "./Components/Layout";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import About from "./Components/About";
import Contact from "./Components/Contact";
import { createContext } from "react";
import { useState } from "react";
import { usercontext } from "./Components/Usercontext";
import AccountingForm from "./Components/AccountingForm.";
import Invoicing from "./Components/Invoicing";
import Accounting from "./Components/Accounting";
import Payment from "./Components/Payment";
import Expenses from "./Components/Expenses";
import Report from "./Components/Report";
import Mobile from "./Components/Mobile";
const route=createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Signup" element={<Signup/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/Details" element={<AccountingForm/>}/>
        <Route path="/Invoicing" element={<Invoicing/>}/>
        <Route path="/Accounting" element={<Accounting/>}/>
        <Route path="/Payments" element={<Payment/>}/>
        <Route path="/Expenses" element={<Expenses/>}/>
        <Route path="/Report" element={<Report/>}/>
        <Route path="/Mobile" element={<Mobile/>}/>
    </Route>
  )
  )
  const App = () => {
  const [user,setuser]=useState("");
  return (
    <div>
      <usercontext.Provider value={[user,setuser]}>
      <RouterProvider router={route}/>
      </usercontext.Provider>
    </div>
  )
}
export default App;
