import * as React from 'react';
import MuiBox, { BoxProps } from '@mui/material/Box';

interface Props extends BoxProps {}

function Flex(props: Props): JSX.Element {
  return <MuiBox {...props} display="flex" />;
}

export default Flex;
