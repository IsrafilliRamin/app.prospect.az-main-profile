import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

let myArray = ["Satış dövriyyəsi","Debitor Borclari","Kreditor borclari","Xərclər"]

export default function ResponsiveGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {myArray.map((item, index) => (
          <Grid item xs={2} sm={3} md={3} key={index}>
            <Item className='flex flex-col gap-3'>
                <h3>{item}</h3>
                <span className='text-red-600 text-4xl'>0$</span>
            </Item>
           
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}