import React from 'react'
import { AccountCircle } from './allIcon'


const ProfileIcon = ({profile}) => {
  return (
    <div className='flex items-center flex-col-reverse gap-1 w-full'>
        <div>{profile}</div> <AccountCircle sizepx="60" />
    </div>
  )
}

export default ProfileIcon