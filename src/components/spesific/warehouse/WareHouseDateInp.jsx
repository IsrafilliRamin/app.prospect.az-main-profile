import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function WareHouseDatePicker() {
  return (
    <LocalizationProvider className="!bg-white" dateAdapter={AdapterDayjs}>
      <DemoContainer className="!bg-white" components={['DatePicker']}>
        <DatePicker className="!bg-white" label="Basic date picker" />
      </DemoContainer>
    </LocalizationProvider>
  );
}
