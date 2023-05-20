import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { Flex } from 'design';
import type { Props } from './WorkExperiencePreview.types';

function WorkExperiencePreview({ workExperiences }: Props) {
  return (
    <Flex sx={{ flexDirection: 'column', width: 1 }}>
      <Typography sx={{ fontWeight: 'bold', mb: 1 }} variant="h5">
        Work Experience
      </Typography>

      <Divider sx={{ borderBottomWidth: 2, mb: 2 }} />

      {workExperiences.map(
        ({ organizationName, title, city, state, country, startDate, endDate, summary }, index) => {
          const locationText = [city, state, country].filter(Boolean).join(', ');
          const dateText = [startDate, endDate].filter(Boolean).join(' - ');

          return (
            <Flex
              key={index}
              sx={{
                flexDirection: 'column',
                mb: index !== workExperiences.length - 1 ? 4 : 0,
                width: 1,
              }}
            >
              <Typography variant="h6">
                {organizationName} | {title}
              </Typography>

              {locationText && (
                <Typography sx={{ fontWeight: 'bold' }} variant="subtitle1">
                  {locationText} {dateText ? ` | ${dateText}` : ''}
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

export default WorkExperiencePreview;
