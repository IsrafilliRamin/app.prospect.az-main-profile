
import React from 'react'
import { Outlet } from 'react-router'
import Home from '../../pages/Home'
import { useSelector } from 'react-redux';

const HomeLayout = () => {
  const {heightValue} = useSelector(state=> state.allState);

  return (
    <div style={{marginTop:`${heightValue}px`}} className='flex ml-[110px]  p-0 mt-[95px] bg-slate-200 text-black'>
        <Home/>
        <Outlet/>
    </div>
  )
}

export default HomeLayout