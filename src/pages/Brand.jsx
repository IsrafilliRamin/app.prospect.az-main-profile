
import React from 'react'
import UserSelect from '../components/spesific/User/UserInputSelect'
import UserInputSearch from '../components/spesific/User/UserInputSearch'
import { ExcellSvg } from '../components/common/svg/allSvgComponents'
import SettingsIcon from '@mui/icons-material/Settings';

import { Button, ButtonBase } from '@mui/material'
import ConnectModal from '../components/spesific/Connections/ConnencModal'
import ConnectTable from '../components/spesific/Connections/ConnectTable'
import ConnectPopupState from '../components/spesific/Connections/ConnectPop'
import ConnectButtonGroup from '../components/spesific/Connections/ConnectButtonGro';
import { Link } from 'react-router-dom';
const Brand = () => {
 
    return (
   
      <div className='flex ml-[100px]   p-3 mt-[84px] bg-slate-200 text-black'>
        <div className="w-[320px] border-r-4 border-gray-400 h-[100vh] overflow-y-scroll">
          <h2 className='pl-5 text-2xl flex items-center h-20 border-b-2 border-white'> Əlaqələr</h2>
          <div className='pl-5 text-2xl flex flex-col gap-3  py-3 border-b-2 border-white'>
            <h3>Əlaqə tipi</h3>
            <UserSelect />
          </div>
          <div className='pl-5 text-2xl flex gap-3 flex-col  py-3 border-b-2 border-white'>
            <h3>Kateqoriya</h3>
            <UserSelect />
           
          </div>
          <div className='pl-5 text-2xl flex gap-3 flex-col  py-3 border-b-2 border-white'>
            <h3>Ad</h3>
            <UserInputSearch />
          </div>
          <div className='pl-5 text-2xl flex gap-3 flex-col  py-3 border-b-2 border-white'>
            <h3>İD nömrə</h3>
            <UserInputSearch />
          </div>
          <div className='pl-5 text-2xl flex gap-3 flex-col  py-3 border-b-2 border-white'>
            <h3>Menecer</h3>
            <UserSelect />
          </div>
          <div className='pl-5 text-2xl flex gap-3 flex-col  py-3 border-b-2 border-white'>
          <h3>Etiketli / Etiketsiz</h3>
           <ConnectButtonGroup/>
          </div>
          <div className='pl-5 text-2xl flex gap-3 flex-col  py-3 border-b-2 border-white'>
            <h3>Email</h3>
            <UserInputSearch />
          </div>
          <div className='pl-5 text-2xl flex gap-3 flex-col  py-3 border-b-2 border-white'>
            <h3>Telefon</h3>
            <UserInputSearch />
          </div>
          <div className='pl-5 text-2xl flex gap-3 flex-col  py-3 border-b-2 border-white'>
            <h3>Əlavə məlumat</h3>
            <UserInputSearch />
          </div>
          <div className='pl-5 text-2xl flex gap-3 flex-col  py-3 border-b-2 border-white'>
            <h3>Qiymet tipi</h3>
            <UserSelect />
           
          </div>
          <div className='pl-5 text-2xl flex gap-3 flex-col  py-3 border-b-2 border-white'>
            <h3>Baş əlaqə</h3>
            <UserSelect />
           
          </div>
          <div className='pl-5 text-2xl flex gap-3 flex-col  py-3 border-b-2 border-white'>
            <h3>Etiket</h3>
            <UserSelect />
           
          </div>
        </div>


        <div className="flex flex-col gap-5 p-5  w-[70vw]">
          <div>
          <Link to="/connection"> <Button variant="text">Əlaqələr</Button></Link>
          <Link to="/partners">  <Button variant="text">Partnyorlar</Button></Link>
          <Link to="/brand"> <Button variant="text">Marka</Button></Link>
          </div>
          <div className='flex items-center p-5 gap-4 justify-end'>
            <ConnectModal svg={<SettingsIcon />} />
            <ConnectModal svg={<ExcellSvg />} />
            <Button variant="contained">Yeni Marka</Button>
          </div>
          <div>
            <ConnectTable />
          </div>
        </div>
      </div>
   
  )
  
}

export default Brand