import React from 'react';
import MuiButton, { ButtonProps } from '@mui/material/Button';

interface Props extends ButtonProps {}

function Button({ variant = 'contained', ...props }: Props): JSX.Element {
  return (
    <MuiButton
      {...props}
      disableElevation
      disableRipple
      sx={{ borderRadius: 0, py: 2, px: 8 }}
      variant={variant}
    />
  );
}

export default Button;
