import React from 'react'
import UserSelect from '../components/spesific/User/UserInputSelect'
import UserInputSearch from '../components/spesific/User/UserInputSearch'
import UserModal from '../components/spesific/User/UserModal'
import { ExcellSvg } from '../components/common/svg/allSvgComponents'
import SettingsIcon from '@mui/icons-material/Settings';
import UserPopover from '../components/spesific/User/UserPopHover'
import UserPopupState from '../components/spesific/User/UserPopHover'
import UserTable from '../components/spesific/User/UserTable'
const User = () => {
  return (
    <div className='flex ml-[100px] h-[100vh]  p-3 mt-[84px] bg-slate-200 text-black'>
      <div className="w-[320px] py-3 border-r-4 border-gray-400">
        <h2 className='pl-5 text-2xl flex items-center h-20 border-b-2 border-white'> Istifadeciler</h2>
        <div className='pl-5 text-2xl flex flex-col gap-3   border-b-2 border-white'>
          <h3>Biznes blok</h3>
          <UserSelect/>
        </div>
        <div className='pl-5 text-2xl flex gap-3 flex-col  py-3 border-b-2 border-white'>
          <h3>Ad</h3>
          <UserInputSearch/>
        </div>
        <div className='pl-5 text-2xl flex gap-3 flex-col  py-3 border-b-2 border-white'>
          <h3>Status</h3>
          <UserSelect/>
        </div>
        <div className='pl-5 text-2xl flex gap-3 flex-col  py-3 border-b-2 border-white'>
          <h3>Qrup</h3>
          <UserSelect/>
        </div>
      </div>


      <div className="flex flex-col gap-5 p-5  w-[70vw]">
        <div className='flex items-center p-5 gap-4 justify-end'>
          <UserModal  svg={<SettingsIcon/>} /> 
          <UserModal svg={<ExcellSvg/>}/> 
        <UserPopupState/>
        </div>
        <div>
         <UserTable/>
        </div>
      </div>
    </div>
  )
}

export default User