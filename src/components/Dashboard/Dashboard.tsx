import { ResumeBuilder } from 'components/ResumeBuilder';
import { ResumePreview } from 'components/ResumePreview';
import { Flex } from 'design';

import type { Props } from './Dashboard.types';

function Dashboard({ layout }: Props) {
  return (
    <Flex sx={{ p: 8, width: 1 }}>
      {layout !== 'preview' && (
        <Flex
          sx={{
            pr: layout === 'split' ? 4 : 0,
            width: layout === 'split' ? 1 / 2 : 1,
          }}
        >
          <ResumeBuilder />
        </Flex>
      )}

      {layout !== 'builder' && (
        <Flex
          sx={{
            pl: layout === 'split' ? 4 : 0,
            width: layout === 'split' ? 1 / 2 : 1,
          }}
        >
          <ResumePreview />
        </Flex>
      )}
    </Flex>
  );
}

export default Dashboard;
