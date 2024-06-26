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
import { useSelector } from 'react-redux';
import WareHouseDatePicker from '../components/spesific/warehouse/WareHouseDateInp';
import WareHouseToggleButton from '../components/spesific/warehouse/WareHouseActiveBtn';
import WareHouseCheckboxes from '../components/spesific/warehouse/WareHouseCheckBox';
import WareHouseRadioButtonsGroup from '../components/spesific/warehouse/WareHouseRadio';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import WareHouseTable from '../components/spesific/warehouse/WareHouseTable';
import WareHouseModal from '../components/spesific/warehouse/WareHouseModal';

const Warehouse = () => {
  const {heightValue} = useSelector(state=> state.allState);
  return (
    <div style={{marginTop:`${heightValue}px`}} className='flex ml-[110px] h-[87.5vh] p-3 mt-[90px] bg-slate-200 text-black'>
      <div className="w-[320px] border-r-4 border-gray-400 h-[100vh] overflow-y-scroll">
        <h2 className='pl-5 text-2xl flex items-center gap-3 h-20 border-b-2 border-white'> Anbar<SettingsIcon /></h2>
        <div className='pl-5 text-2xl flex flex-col gap-3  py-3 border-b-2 border-white'>
          <h3>Biznes blok</h3>
          <UserSelect />
        </div>
        <div className='pl-5 text-2xl flex gap-3 flex-col  py-3 border-b-2 border-white'>
          <h3>Qruplasdir</h3>
          <UserSelect />

        </div>
        <div className='pl-5 text-2xl flex gap-3 flex-col  py-3 border-b-2 border-white'>
          <h3>Tarix</h3>
          <WareHouseDatePicker  />
        </div>
        <div className='pl-5 text-2xl flex gap-3 flex-col  py-3 border-b-2 border-white'>
          <h3>İD nömrə</h3>
          <UserInputSearch />
        </div>
        <div className='pl-5 text-2xl flex gap-3 flex-col  py-3 border-b-2 border-white'>
          <h3>Valyuta</h3>
         <WareHouseToggleButton/>
        </div>
        <div className='pl-5 text-2xl flex gap-3 flex-col  py-3 border-b-2 border-white'>
          <h3>Seriya nömresi</h3>
          <ConnectButtonGroup />
        </div>
        <div className='pl-5 text-2xl flex gap-3 flex-col  py-3 border-b-2 border-white'>
          <h3>Planlama</h3>
          <ConnectButtonGroup />
        </div>
        <div className='pl-5 text-2xl flex gap-3 flex-col  py-3 border-b-2 border-white'>
          <h3>Əmıliyyatın növü</h3>
          <UserSelect />

        </div>
        <div className='pl-5 text-2xl flex gap-3 flex-col  py-3 border-b-2 border-white'>
          <h3>Anbar</h3>
          <UserSelect />

        </div>
        <div className='pl-5 text-2xl flex gap-3 flex-col  py-3 border-b-2 border-white'>
          <h3>İcra Statusu</h3>
          <UserSelect />

        </div>
        <div className='pl-5 text-2xl flex gap-3 flex-col  py-3 border-b-2 border-white'>
          <h3>Menecer</h3>
          <UserSelect />

        </div>
        <div className='pl-5 text-2xl flex gap-3 flex-col  py-3 border-b-2 border-white'>
          <h3>Kataloq</h3>
          <UserSelect />

        </div>
        <div className='pl-5 text-2xl flex gap-3 flex-col  py-3 border-b-2 border-white'>
          <h3>Məhsul adı və kodu</h3>
          <UserInputSearch />
        </div>
        <div className='pl-5 text-2xl flex gap-3 flex-col  py-3 border-b-2 border-white'>
          <h3>Məhsul adı (seç)</h3>
          <UserSelect />

        </div>
        <div className='pl-5 text-2xl flex gap-3 flex-col  py-3 border-b-2 border-white'>
          <h3>Məhsul adı axtar</h3>
          <UserInputSearch />
        </div>
        <div className='pl-5 text-2xl flex gap-3 flex-col  py-3 border-b-2 border-white'>
          <h3>Marka Axtar</h3>
          <UserInputSearch />
        </div>
        <div className='pl-5 text-2xl flex gap-3 flex-col  py-3 border-b-2 border-white'>
          <h3>Marka seç</h3>
          <UserSelect />

        </div>
        <div className='pl-5 text-2xl flex gap-3 flex-col  py-3 border-b-2 border-white'>
          <h3>Müqavilə</h3>
          <WareHouseRadioButtonsGroup />

        </div>
        <div className='pl-5 text-2xl flex gap-3 flex-col  py-3 border-b-2 border-white'>
          <h3>Ölçü vahidi</h3>
          <UserSelect />

        </div>
        <div className='pl-5 text-2xl flex gap-3 flex-col  py-3 border-b-2 border-white'>
          <h3>Baş əlaqə</h3>
          <UserSelect />

        </div>
        <div className='pl-5 text-2xl flex gap-3  items-center py-3 border-b-2 border-white'>
          <WareHouseCheckboxes />
          <p className='text-lg'>Barkodlu məhsulları göstər</p>

        </div>
        <div className='pl-5 text-2xl flex gap-3  items-center  py-3 border-b-2 border-white'>
          <WareHouseCheckboxes />
          <p className='text-lg'>Multi-ölçü vahidli məhsulları</p>

        </div>
        <div className='pl-5 text-2xl flex gap-3 items-center  py-3 border-b-2 border-white'>
          <WareHouseCheckboxes />
          <p className='text-lg'>Tərkibli məhsulları göstər</p>

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
          <WareHouseModal><OpenInFullIcon/></WareHouseModal>
        </div>
        <div>
          <WareHouseTable />
        </div>
      </div>
    </div>
  )
}

export default Warehouse