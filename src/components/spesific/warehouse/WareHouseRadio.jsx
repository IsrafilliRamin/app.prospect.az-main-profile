import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function WareHouseRadioButtonsGroup() {
  return (
    <FormControl>
     {/*  <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel> */}
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="Hamsı"
        name="radio-buttons-group"
      >
        <FormControlLabel value="Hamsı" control={<Radio />} label="Hamsı" />
        <FormControlLabel value="Müqavilə" control={<Radio />} label="Müqavilə" />
        <FormControlLabel value="Müqaviləsiz" control={<Radio />} label="Müqaviləsiz" />
      </RadioGroup>
    </FormControl>
  );
}
