import React from 'react'
import { Button } from '@mui/material'
const ButtonCom = ({icon,text,color,handleClick}) => {
   

   
    return (
        <Button onClick={handleClick}  className='!rounded-none p-72 min-h-full h-fit w-28 text-1xl flex flex-col  flex-grow' variant="contained" color={color}>
            {icon}
           <div className='text-xs'>{text}</div>
        </Button>
    )
}

export default ButtonCom