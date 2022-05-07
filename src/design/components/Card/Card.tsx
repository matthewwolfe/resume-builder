import MuiCard, { CardProps } from '@mui/material/Card';

interface Props extends CardProps {}

function Card(props: Props) {
  return <MuiCard {...props} sx={{ p: 8, maxWidth: 1280, width: 1 }} square variant="outlined" />;
}

export default Card;
