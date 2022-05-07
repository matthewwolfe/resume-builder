import React from 'react';
import MuiTextField, { OutlinedTextFieldProps } from '@mui/material/TextField';

interface Props extends Omit<OutlinedTextFieldProps, 'variant'> {}

function TextField({ fullWidth = true, type = 'text', ...props }: Props) {
  return (
    <MuiTextField {...props} fullWidth={fullWidth} margin="normal" type={type} variant="standard" />
  );
}

export default TextField;
