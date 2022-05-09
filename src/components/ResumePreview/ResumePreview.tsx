import { PersonalInfoPreview } from 'components/PersonalInfo';
import { SkillsPreview } from 'components/Skills';
import { SummaryPreview } from 'components/Summary';
import { WorkExperiencePreview } from 'components/WorkExperience';
import { Card, Flex } from 'design';

function ResumePreview() {
  return (
    <Card>
      <Flex sx={{ mb: 6, width: 1 }}>
        <PersonalInfoPreview />
      </Flex>

      <Flex sx={{ mb: 6, width: 1 }}>
        <SummaryPreview />
      </Flex>

      <Flex sx={{ mb: 6, width: 1 }}>
        <SkillsPreview />
      </Flex>

      <Flex sx={{ mb: 6, width: 1 }}>
        <WorkExperiencePreview />
      </Flex>
    </Card>
  );
}

export default ResumePreview;
