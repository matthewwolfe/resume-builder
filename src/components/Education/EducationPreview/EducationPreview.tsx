import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { Flex } from 'design';

import type { Props } from './EducationPreview.types';

function EducationPreview({ educations }: Props) {
  return (
    <Flex sx={{ flexDirection: 'column', width: 1 }}>
      <Typography sx={{ fontWeight: 'bold', mb: 1 }} variant="h5">
        Education
      </Typography>

      <Divider sx={{ borderBottomWidth: 2, mb: 2 }} />

      {educations.map(
        ({ institution, degree, graduationDate, city, state, country, summary }, index) => {
          const locationText = [city, state, country].filter(Boolean).join(', ');

          return (
            <Flex
              key={index}
              sx={{
                flexDirection: 'column',
                mb: index !== educations.length - 1 ? 4 : 0,
                width: 1,
              }}
            >
              <Typography variant="h6">
                {institution} | {degree} | {graduationDate}
              </Typography>

              {locationText && (
                <Typography sx={{ fontWeight: 'bold' }} variant="subtitle1">
                  {locationText}
                </Typography>
              )}
              <Typography variant="body1">{summary}</Typography>
            </Flex>
          );
        },
      )}
    </Flex>
  );
}

export default EducationPreview;
