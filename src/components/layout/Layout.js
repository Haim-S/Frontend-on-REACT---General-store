import React from 'react'
import Navbar from './navbar/Navbar';
import Header from './header/Header';
import Footer from './footer/Footer';
import Sidebar from './sidebar/Sidebar';
import { SidebarStyle } from './LayoutStyle';
import { Outlet } from 'react-router-dom';
import "./Layout.css"


const Layout = () => {
  return (
    <>
    <SidebarStyle>
    <Sidebar/>
    </SidebarStyle>
    <Navbar/>
    <Header/>
     <main>
      <Outlet/>
     </main>
    <Footer/>
    </>
  )
}

export default Layout