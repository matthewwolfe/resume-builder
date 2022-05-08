import { PersonalInfoPreview } from 'components/PersonalInfo';
import { SkillsPreview } from 'components/Skills';
import { SummaryPreview } from 'components/Summary';
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

      <SkillsPreview />
    </Card>
  );
}

export default ResumePreview;
