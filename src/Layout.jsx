import React from 'react'
import { Outlet } from 'react-router'
import { Footer } from './components/footer/Footer'
import { NavBar } from './components/navBar/NavBar'

export const Layout = () => {
  return (
    <>
      {/* <TopBar /> */}
      <NavBar />
      <Outlet />
      <Footer />
    </>
  )
}
