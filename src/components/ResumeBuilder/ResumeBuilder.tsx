import Typography from '@mui/material/Typography';
import { Card } from 'design';

import { Props } from './ResumeBuilder.types';

function ResumeBuilder(props: Props) {
  return (
    <Card>
      <Typography fontWeight="bold" variant="h5">
        Personal Information
      </Typography>

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
