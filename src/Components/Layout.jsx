import { Outlet } from "react-router-dom";
import Appbar from "./Appbar";
import React from 'react'

 const Layout = () => {
  return (
    <div>
    <div><Appbar/></div>
    <main>
        <Outlet/>
    </main>
    </div>
  )
}
export default Layout;
