import React from 'react'
import ControlHead from '../components/spesific/ControlSpes/ControlHead'
import ControlSection from '../components/spesific/ControlSpes/ControlSection'
import ResponsiveGrid2 from '../components/spesific/ControlSpes/ControlSection2'
import BasicTableControl from '../components/spesific/ControlSpes/ControlEndTable'
import BasicPieControl from '../components/spesific/ControlSpes/PieControl'
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'

const ControlPanel = () => {
  const [uzman, setAge] = React.useState('');

  const handleChange = (event) => {
      setAge(event.target.value);
  };
  return (
    <div className='ml-[110px]  flex flex-col gap-10 p-3 mt-[90px] bg-slate-200 text-black'>
      <ControlHead />
      <ControlSection />
      <ResponsiveGrid2 />
      <div className='flex items-center gap-10'>
        <BasicTableControl />
        <div className='bg-white p-4 flex flex-col gap-5'>
        <FormControl fullWidth={200}>
                    <InputLabel id="demo-simple-select-label">Secin</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={uzman}
                        label="Uzman"
                        onChange={handleChange}
                    >
                        <MenuItem value={10}>Uzman</MenuItem>
                        <MenuItem value={20}>Reis</MenuItem>

                    </Select>
                </FormControl>
          <BasicPieControl />
        </div>
      </div>
    </div>
  )
}

export default ControlPanel