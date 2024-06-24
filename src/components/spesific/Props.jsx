import React from 'react'
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { TextField } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import UnstyledSelectIntroduction from '../common/RadioInput';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';

const Props = () => {
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  return (
    <div className='p-5'>
    <FormControl className='flex w-[50vw] gap-10 bg-white rounded-lg !p-5'>
      
      <h1>Şirkət rekvizitləri</h1>
      <h3>Şirkət məlumatları</h3>
      <FormLabel className='flex gap-10'>
        <TextField className='!w-full' type='text' id="outlined-basic" label="Şirkətin adı" variant="outlined" />
      </FormLabel>
      <FormLabel className='flex gap-10'>
        <TextField className='!w-full' type='text' id="outlined-basic" label="Baş direktor" variant="outlined" />
      </FormLabel>
      <FormLabel className='flex gap-10'>
        <TextField className='!w-full' type='text' id="outlined-basic" label="VÖEN (Şirkət)" variant="outlined" />
      </FormLabel>
    <h2>Bank məlumatları</h2>
    <FormLabel className='flex gap-10'>
        <TextField className='!w-full' type='text' id="outlined-basic" label="Bank adı" variant="outlined" />
      </FormLabel>
      <FormLabel className='flex gap-10'>
        <TextField className='!w-full' type='text' id="outlined-basic" label="VÖEN (Bank)" variant="outlined" />
      </FormLabel>
      <FormLabel className='flex gap-10'>
        <TextField className='!w-full' type='text' id="outlined-basic" label="Kod" variant="outlined" />
      </FormLabel>
      <FormLabel className='flex gap-10'>
        <TextField className='!w-full' type='text' id="outlined-basic" label="Müxbir hesab (M/h)" variant="outlined" />
      </FormLabel>
      <FormLabel className='flex gap-10'>
        <TextField className='!w-full' type='text' id="outlined-basic" label="Hesablaşma hesabı (H/h)" variant="outlined" />
      </FormLabel>
      <FormLabel className='flex gap-10'>
        <TextField className='!w-full' type='text' id="outlined-basic" label="S.W.I.F.T" variant="outlined" />
      </FormLabel>
      <Button variant="contained" color="success">
        Yadda saxla
      </Button>
    </FormControl>
  </div>
  )
}

export default Props