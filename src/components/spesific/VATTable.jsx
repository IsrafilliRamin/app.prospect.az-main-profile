import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import SelectSmall from './SelectMUI';
import Switch from '@mui/material/Switch';
import EditIcon from '@mui/icons-material/Edit';


function createData(id,name, calories, fat, carbs, protein) {
  return {id, name, calories, fat, carbs, protein };
}

const rows = [
  createData(1,'Frozen yoghurt', 159, 6.0, 4.0),
];
const label = { inputProps: { 'aria-label': 'Switch demo' } };
export default function AccessibleTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 950 }} aria-label="caption table">
     {/*    <caption>A basic table example with a caption</caption> */}
        <TableHead className='bg-green-800 !text-white'>
          <TableRow className='!text-white'>
            <TableCell className='!text-white'>№</TableCell>
            <TableCell className='!text-white' align="right">Biznes blok</TableCell>
            <TableCell className='!text-white' align="right">ƏDV</TableCell>
            <TableCell className='!text-white' align="right">Düzəliş imkanı</TableCell>
            <TableCell className='!text-white' align="right">ƏDV faizi</TableCell>
            <TableCell className='!text-white' align="right">Seç</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">   <Switch {...label} defaultChecked /></TableCell>
              <TableCell align="right">   <Switch {...label} defaultChecked /></TableCell>
              <TableCell align="right">0.00%</TableCell>
              <TableCell align="right"><EditIcon className='cursor-pointer'/></TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
