import { Button } from '@mui/material'
import React from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const ControlHead = () => {


    const [uzman, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <div className='flex justify-between items-center'>
            <Button variant="contained">Ticarət Maliyyə</Button>
            <div className='flex gap-5 items-center'>
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
                <LocalizationProvider  dateAdapter={AdapterDayjs}>
                    <DatePicker className="!w-[500px]" />
                </LocalizationProvider>
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
            </div>
        </div>
    )
}

export default ControlHead