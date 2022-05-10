import MuiCard, { CardProps } from '@mui/material/Card';
import { styled } from '@mui/material/styles';

interface Props extends CardProps {}

const StyledMuiCard = styled(MuiCard)(() => ({
  '@media print': {
    border: 0,
    padding: 0,
  },
}));

function Card(props: Props) {
  return (
    <StyledMuiCard
      {...props}
      sx={{ p: 8, maxWidth: 1024, width: 1 }}
      square
      elevation={0}
      variant="outlined"
    />
  );
}

export default Card;
