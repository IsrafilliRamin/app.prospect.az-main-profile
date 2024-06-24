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



const UserInfo = () => {
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  return (
    <div className='p-5'>
      <FormControl className='flex gap-10 bg-white rounded-lg !p-5'>
        
        <FormLabel className='flex gap-10'>
        <TextField type={"file"} inputProps={{accept:"application/pdf"}}/>
        </FormLabel>
        <FormLabel className='flex gap-10'>
          <TextField type='text' id="outlined-basic" label="Ad" variant="outlined" />
          <TextField id="outlined-basic" label="Soyad" variant="outlined" />
        </FormLabel>
        <FormLabel className='flex gap-10'>
          <TextField type='email' id="outlined-basic" label="Email" variant="outlined" />
        </FormLabel>
        <FormLabel className='flex gap-10'>
          <TextField mask="(#00) 000-0000" type='text' id="outlined-basic" label="Number" variant="outlined" />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker />
          </LocalizationProvider>
        </FormLabel>
        <FormLabel className='flex gap-10'>
          <TextField mask="(#00) 000-0000" type='text' id="outlined-basic" label="Number" variant="outlined" />
          <UnstyledSelectIntroduction />
        </FormLabel>
        <FormLabel className='flex items-center gap-0'>
          <Checkbox defaultChecked {...label} /> <div>Daxil olan zaman tenant seçimi pəncərəsi aktivləşsin</div>
        </FormLabel>
        <Button variant="contained" color="success">
          Yadda saxla
        </Button>
      </FormControl>
    </div>
  )
}

export default UserInfo