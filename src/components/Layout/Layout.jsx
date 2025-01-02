import React from 'react'
import { Outlet } from 'react-router-dom'
import { Nav, Footer } from "../index"

const Layout = () => {
  return (
    <>
      <Nav/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default Layout
