import React from 'react'
import { useSelector } from 'react-redux';

const SingleOperationPanel = () => {
  const {heightValue} = useSelector(state=> state.allState);
  return (
    <div style={{marginTop:`${heightValue}px`}} className='ml-[110px] h-[87.5vh] p-3 mt-[90px] bg-slate-200 text-black'>SingleOperationPanel</div>
  )
}

export default SingleOperationPanel