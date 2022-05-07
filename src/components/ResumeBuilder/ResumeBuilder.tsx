import Typography from '@mui/material/Typography';
import { PersonalInfoForm } from 'components/PersonalInfo';
import { Card, Flex } from 'design';

import { Props } from './ResumeBuilder.types';

function ResumeBuilder(props: Props) {
  return (
    <Card>
      <Flex sx={{ mb: 8 }}>
        <PersonalInfoForm />
      </Flex>

      <Typography fontWeight="bold" variant="h5">
        Summary
      </Typography>

      <Typography fontWeight="bold" variant="h5">
        Skills
      </Typography>

      <Typography fontWeight="bold" variant="h5">
        Experience
      </Typography>

      <Typography fontWeight="bold" variant="h5">
        Education
      </Typography>
    </Card>
  );
}

export default ResumeBuilder;
