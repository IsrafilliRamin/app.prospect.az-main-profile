import * as React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Popper from '@mui/material/Popper';
import PopupState, { bindToggle, bindPopper } from 'material-ui-popup-state';
import Fade from '@mui/material/Fade';
import Paper from '@mui/material/Paper';
import UserModal from './UserModal';

export default function UserPopupState() {
  return (
    <PopupState variant="popper" popupId="demo-popup-popper">
      {(popupState) => (
        <div>
          <Button variant="contained" {...bindToggle(popupState)}>
            Toggle Popper
          </Button>
          <Popper {...bindPopper(popupState)} transition>
            {({ TransitionProps }) => (
              <Fade {...TransitionProps} timeout={350}>
                <Paper className='flex flex-col gap-2 !w-[160px]'>
                  <Typography className='flex items-center flex-col gap-2 !w-full' sx={{ p: 2 }}>
                    <UserModal svg="Uzman"/>
                    <UserModal svg="Reis"/>
                  </Typography>
                </Paper>
              </Fade>
            )}
          </Popper>
        </div>
      )}
    </PopupState>
  );
}
