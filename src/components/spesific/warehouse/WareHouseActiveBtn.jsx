import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function WareHouseToggleButton() {
  const [alignment, setAlignment] = React.useState('azn');

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <ToggleButtonGroup
      color="primary"
      value={alignment}
      exclusive
      onChange={handleChange}
      aria-label="Platform"
    >
      <ToggleButton value="azn">AZN</ToggleButton>
      <ToggleButton value="usd">USD</ToggleButton>
    </ToggleButtonGroup>
  );
}
