import { PersonalInfoPreview } from 'components/PersonalInfo';
import { SummaryPreview } from 'components/Summary';
import { Card, Flex } from 'design';

function ResumePreview() {
  return (
    <Card>
      <Flex sx={{ mb: 6, width: 1 }}>
        <PersonalInfoPreview />
      </Flex>

      <SummaryPreview />
    </Card>
  );
}

export default ResumePreview;
