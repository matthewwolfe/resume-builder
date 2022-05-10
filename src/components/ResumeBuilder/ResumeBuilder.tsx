import { EducationForm } from 'components/Education';
import { PersonalInfoForm } from 'components/PersonalInfo';
import { SkillsForm } from 'components/Skills';
import { SummaryForm } from 'components/Summary';
import { WorkExperienceForm } from 'components/WorkExperience';
import { Card, Flex } from 'design';

function ResumeBuilder() {
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

      <Flex>
        <EducationForm />
      </Flex>
    </Card>
  );
}

export default ResumeBuilder;
