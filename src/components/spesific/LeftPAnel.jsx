
import React, { useEffect, useRef } from 'react'
import AutoAwesomeMosaicIcon from '@mui/icons-material/AutoAwesomeMosaic';
import ButtonCom from '../common/Button';
import BallotIcon from '@mui/icons-material/Ballot';
import PeopleIcon from '@mui/icons-material/People';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import WarehouseIcon from '@mui/icons-material/Warehouse';
import AlignVerticalBottomIcon from '@mui/icons-material/AlignVerticalBottom';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { handleHeightValue } from '../../redux/sliceredux/sliceCounter';
const LeftPAnel = () => {

    const dispatch = useDispatch();
    const ref = useRef(null)



    useEffect(() => {
        dispatch(handleHeightValue(ref.current.clientHeight))
     
    })


    return (
        <div className='flex h-[100vh] bg-slate-600 z-20 flex-col  fixed left-0 top-0  '>
            <Link ref={ref} className='flex flex-grow' to="/"> <ButtonCom icon={<AutoAwesomeMosaicIcon className='!text-6xl' />} text="" color="success" /></Link>
            <Link className='flex flex-grow' to="/controlpanel"> <ButtonCom icon={<BallotIcon className='!text-4xl' />} text="Nəzarət paneli" /></Link>
            <Link className='flex flex-grow' to="/User"> <ButtonCom icon={<PeopleIcon className='!text-4xl' />} text="İstifadəçilər" /></Link>
            <Link className='flex flex-grow' to="/connection"> <ButtonCom icon={<PersonAddIcon className='!text-4xl' />} text="Əlaqələr" /></Link>
            <Link className='flex flex-grow' to="/warehouse"> <ButtonCom icon={<WarehouseIcon className='!text-4xl' />} text="Anbar" /></Link>
            <Link className='flex flex-grow' to="/trade">  <ButtonCom icon={<AlignVerticalBottomIcon className='!text-4xl' />} text="Ticarət" /></Link>
            <Link className='flex flex-grow' to="/finance"> <ButtonCom icon={<MonetizationOnIcon className='!text-4xl' />} text="Maliyyə" /></Link>
            <Link className='flex flex-grow' to="/reports"> <ButtonCom icon={<AnalyticsIcon className='!text-4xl' />} text="Hesabatlar" /></Link>







        </div>
    )
}

export default LeftPAnel