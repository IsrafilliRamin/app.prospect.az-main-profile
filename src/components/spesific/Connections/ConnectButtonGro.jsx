import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

export default function ConnectButtonGroup() {
  return (
    <ButtonGroup className='flex justify-between w-fit' variant="contained" aria-label="Basic button group">
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
    </ButtonGroup>
  );
}
