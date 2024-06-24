import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <div className='flex flex-col min-h-screen border-r-8 border-gray-400 w-80 bg-slate-200 text-black'>
      <NavLink className="h-16  flex items-center pl-10" to="userinfo">Userinfo</NavLink>
      <NavLink className="h-16  flex items-center pl-10" to="security">Təhlukəsizlik və Giriş</NavLink>
      <NavLink className="h-16  flex items-center pl-10" to="aboutcompany">Şirkət haqqında</NavLink>
      <NavLink className="h-16  flex items-center pl-10" to="props">Rekvizitlər</NavLink>
      <NavLink className="h-16  flex items-center pl-10" to="auditlog">Audit log</NavLink>
      <NavLink className="h-16  flex items-center pl-10" to="applications">Tətbiqlər</NavLink>
      <NavLink className="h-16  flex items-center pl-10" to="deletionoftransactions">Əməliyyatların silinməsi</NavLink>
      <NavLink className="h-16  flex items-center pl-10" to="vatrequlations">ƏDV tənzimləmələri</NavLink>
    </div>
  )
}

export default Home