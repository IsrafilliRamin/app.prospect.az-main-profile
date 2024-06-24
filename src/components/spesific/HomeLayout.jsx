
import React from 'react'
import { Outlet } from 'react-router'
import Home from '../../pages/Home'

const HomeLayout = () => {
  /* h-[87.5vh] */
  return (
    <div className='flex ml-[110px]  p-0 mt-[90px] bg-slate-200 text-black'>
        <Home/>
        <Outlet/>
    </div>
  )
}

export default HomeLayout