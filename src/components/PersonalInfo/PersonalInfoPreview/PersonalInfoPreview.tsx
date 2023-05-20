import { Link, Typography } from '@mui/material';
import { Flex } from 'design';
import type { Props } from './PersonalInfoPreview.types';

function PersonalInfoPreview({
  firstName,
  lastName,
  email,
  phoneNumber,
  links,
  address1,
  address2,
  city,
  state,
  country,
  zip,
}: Props) {
  return (
    <Flex sx={{ justifyContent: 'space-between', width: 1 }}>
      <Flex sx={{ flexDirection: 'column', width: 1 }}>
        <Typography sx={{ fontWeight: 'bold' }} variant="h5">
          {firstName} {lastName}
        </Typography>

        <Typography variant="body2">
          {address1} {address2}
        </Typography>

        <Typography variant="body2">
          {[city, state, country, zip].filter(Boolean).join(', ')}
        </Typography>

        <Flex sx={{ flexDirection: 'column', mt: 2 }}>
          <Typography variant="body2">{email}</Typography>
          <Typography variant="body2">{phoneNumber}</Typography>
        </Flex>
      </Flex>

      <Flex
        sx={{
          alignItems: 'flex-end',
          flexDirection: 'column',
          width: 1,
        }}
      >
        {links.split('\n').map((link, index) => {
          const text = link.match(/(?<=\[)[^\][]*(?=])/g);

          return (
            <Link href={link.split(' ')[0]} key={index} target="_blank">
              {Array.isArray(text) ? text[0] : link}
            </Link>
          );
        })}
      </Flex>
    </Flex>
  );
}

export default PersonalInfoPreview;
