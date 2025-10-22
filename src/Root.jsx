import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Components/User/Navbar/Navbar'
export default function Root() {
  return (
    <>
    <Navbar/>
    <Outlet/>
    </>
  )
}
