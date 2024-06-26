import React from 'react'
import ButtonCom from "../common/Button"
import AutoAwesomeMosaicIcon from '@mui/icons-material/AutoAwesomeMosaic';
import { DashboardCustomize, LocalPhone, Notifications, SettingsSuggest } from '../common/allIcon';
import ProfileIcon from '../common/ProfileIcon';
import { Link } from 'react-router-dom';
import { Unstable_Popup as BasePopup } from '@mui/base/Unstable_Popup';
import { styled } from '@mui/system';
import { useSelector } from 'react-redux';
import classNames from 'classnames'

const HeaderPanel = () => {
  const [anchor, setAnchor] = React.useState(null);

  const handleClick = (event) => {
   
    setAnchor(anchor ? null : event.currentTarget);
  };

  const open = Boolean(anchor);
  const id = open ? 'simple-popup' : undefined;


  
  const {heightValue} = useSelector(state=> state.allState);

  return (
    <div style={{ height: `${heightValue}px` }} className={classNames('flex bg-green-500 fixed  top-0 left-0 pl-32 z-10  w-full justify-between',[`h-[${heightValue}px]`])}>
      {/*  <ButtonCom icon={<AutoAwesomeMosaicIcon className='!text-6xl'/>} text="" color="success"  /> */}
      <div className="leftHeader flex items-center gap-12">
        <div className="dateLogUser">
          <h2>Bu gun, 16may 2024</h2>
          <span>Cümə axşamı</span>
        </div>
        <ButtonCom icon={<LocalPhone sizepx="50" />} text="" color="success" />
      </div>

      <div className="rightHeader flex  ">
        <Link to="/settings">  <ButtonCom icon={<SettingsSuggest />} color="success" /></Link>
        <Link to="/singleoperationpanel"> <ButtonCom icon={<DashboardCustomize />} color="success" /></Link>
        <BasePopup id={id} open={open} anchor={anchor}>
          <PopupBody className='text-red-500'>The content of the Popup.</PopupBody>
        </BasePopup>
        <ButtonCom handleClick={handleClick}  icon={<Notifications handleClick={handleClick} />} color="success" />
        <Link to="/user"> <ButtonCom icon={<ProfileIcon profile="Mehemmed" />} color="success" /></Link>
      </div>

    </div>
  )
}

export default HeaderPanel


const grey = {
  50: '#F3F6F9',
  100: '#E5EAF2',
  200: '#DAE2ED',
  300: '#C7D0DD',
  400: '#B0B8C4',
  500: '#9DA8B7',
  600: '#6B7A90',
  700: '#434D5B',
  800: '#303740',
  900: '#1C2025',
};

const blue = {
  200: '#99CCFF',
  300: '#66B2FF',
  400: '#3399FF',
  500: '#007FFF',
  600: '#0072E5',
  700: '#0066CC',
};

const PopupBody = styled('div')(
  ({ theme }) => `
  width: max-content;
  padding: 12px 16px;
  margin: 8px;
  border-radius: 8px;
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
  background-color: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
  box-shadow: ${theme.palette.mode === 'dark'
      ? `0px 4px 8px rgb(0 0 0 / 0.7)`
      : `0px 4px 8px rgb(0 0 0 / 0.1)`
    };
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 500;
  font-size: 0.875rem;
  z-index: 1;
`,
);

const Button = styled('button')(
  ({ theme }) => `
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 600;
  font-size: 0.875rem;
  line-height: 1.5;
  background-color: ${blue[500]};
  padding: 8px 16px;
  border-radius: 8px;
  color: white;
  transition: all 150ms ease;
  cursor: pointer;
  border: 1px solid ${blue[500]};
  box-shadow: 0 2px 4px ${theme.palette.mode === 'dark' ? 'rgba(0, 0, 0, 0.5)' : 'rgba(0, 127, 255, 0.5)'
    }, inset 0 1.5px 1px ${blue[400]}, inset 0 -2px 1px ${blue[600]};

  &:hover {
    background-color: ${blue[600]};
  }

  &:active {
    background-color: ${blue[700]};
    box-shadow: none;
  }

  &:focus-visible {
    box-shadow: 0 0 0 4px ${theme.palette.mode === 'dark' ? blue[300] : blue[200]};
    outline: none;
  }

  &.disabled {
    opacity: 0.4;
    cursor: not-allowed;
    box-shadow: none;
    &:hover {
      background-color: ${blue[500]};
    }
  }
`,
);