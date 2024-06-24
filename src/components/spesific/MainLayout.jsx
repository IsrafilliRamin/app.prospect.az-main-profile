import React from 'react'
import PanelNav from './PanelNav'
import {Outlet} from "react-router"
const MainLayout = () => {
  return (
    <>
    <PanelNav/>
    <Outlet/>
    </>
  )
}

export default MainLayout