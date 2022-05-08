import Typography from '@mui/material/Typography';
import { PersonalInfoForm } from 'components/PersonalInfo';
import { SkillsForm } from 'components/Skills';
import { SummaryForm } from 'components/Summary';
import { WorkExperienceForm } from 'components/WorkExperience';
import { Card, Flex } from 'design';

import { Props } from './ResumeBuilder.types';

function ResumeBuilder(props: Props) {
  return (
    <Card>
      <Flex sx={{ mb: 8 }}>
        <PersonalInfoForm />
      </Flex>

      <Flex sx={{ mb: 8 }}>
        <SummaryForm />
      </Flex>

      <Flex sx={{ mb: 8 }}>
        <SkillsForm />
      </Flex>

      <Flex sx={{ mb: 8 }}>
        <WorkExperienceForm />
      </Flex>

      <Typography fontWeight="bold" variant="h5">
        Education
      </Typography>
    </Card>
  );
}

export default ResumeBuilder;
