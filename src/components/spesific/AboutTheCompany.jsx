import React from 'react'
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { TextField } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

dayjs.extend(utc);
dayjs.extend(timezone);

dayjs.extend(utc);
dayjs.extend(timezone);



const AboutTheCompany = () => {
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  const [value, setValue] = React.useState(dayjs.utc('2022-04-17T15:30'));
  return (
    <div className='p-5'>
      <FormControl className='flex justify-between w-[40vw] gap-10 bg-white rounded-lg !p-5'>

        <FormLabel className='flex gap-10'>
          <TextField type={"file"} inputProps={{ accept: "application/pdf" }} />
        </FormLabel>
        <FormLabel className='flex gap-10'>
          <TextField type='text' id="outlined-basic" label="Şirkətin adı" variant="outlined" />
          <TextField type='email' id="outlined-basic" label="Email" variant="outlined" />
        </FormLabel>
        <FormLabel className='flex gap-10'>
          <TextField mask="(#00) 000-0000" type='text' id="outlined-basic" label="Number" variant="outlined" />
          <TextField type='url' id="outlined-basic" label="Web sayt" variant="outlined" />
        </FormLabel>
        <FormLabel className='flex gap-10'>
          <TextField type='text' id="outlined-basic" label="Ünvan" variant="outlined" />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Stack spacing={2}>
              <TimePicker
                value={value}
                onChange={setValue}
                timezone="America/New_York"
                label={'Time Zona'}
              />

              {/* <Typography>
          Stored value: {value == null ? 'null' : value.format()}
        </Typography> */}
            </Stack>
          </LocalizationProvider>
        </FormLabel>

        <Button variant="contained" color="success">
          Yadda saxla
        </Button>
      </FormControl>
    </div>
  )
}

export default AboutTheCompany