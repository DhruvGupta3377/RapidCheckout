import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'

const RootWrapper = () => {
  return (
    <div>
        <Navbar></Navbar>
        <Outlet/>
    </div>
  )
}

export default RootWrapper