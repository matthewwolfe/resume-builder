import Typography from '@mui/material/Typography';
import { Flex } from 'design';
import { Props } from './PersonalInfoPreview.types';

function PersonalInfoPreview({
  firstName,
  lastName,
  email,
  phoneNumber,
  address1,
  address2,
  city,
  state,
  country,
  zip,
}: Props) {
  return (
    <Flex sx={{ flexDirection: 'column', width: 1 }}>
      <Typography sx={{ fontWeight: 'bold' }} variant="h5">
        {firstName} {lastName}
      </Typography>

      <Typography variant="body2">
        {address1} {address2}
      </Typography>

      <Typography variant="body2">
        {city}, {state}, {country} {zip}
      </Typography>

      <Flex sx={{ flexDirection: 'column', mt: 2 }}>
        <Typography variant="body2">{email}</Typography>
        <Typography variant="body2">{phoneNumber}</Typography>
      </Flex>
    </Flex>
  );
}

export default PersonalInfoPreview;
