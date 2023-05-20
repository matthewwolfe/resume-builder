import ButtonGroup from '@mui/material/ButtonGroup';
import { ExportJson } from 'components/ExportJson';
import { ImportJson } from 'components/ImportJson';
import { ResumeBuilder } from 'components/ResumeBuilder';
import { ResumePreview } from 'components/ResumePreview';
import { Button, Flex } from 'design';

import type { Props } from './Dashboard.types';

function Dashboard({ layout, setLayout }: Props) {
  return (
    <Flex sx={{ flexDirection: 'column', px: 8, pt: 4, width: 1 }}>
      <Flex sx={{ displayPrint: 'none', justifyContent: 'space-between', pb: 4 }}>
        <ButtonGroup>
          <Button
            onClick={() => setLayout('builder')}
            variant={layout === 'builder' ? 'contained' : 'outlined'}
          >
            Builder
          </Button>

          <Button
            onClick={() => setLayout('split')}
            variant={layout === 'split' ? 'contained' : 'outlined'}
          >
            Split
          </Button>

          <Button
            onClick={() => setLayout('preview')}
            variant={layout === 'preview' ? 'contained' : 'outlined'}
          >
            Preview
          </Button>
        </ButtonGroup>

        <Flex>
          <Flex mr={1}>
            <Button onClick={() => window.print()} variant="contained">
              Save
            </Button>
          </Flex>

          <Flex mr={1}>
            <ExportJson />
          </Flex>

          <ImportJson />
        </Flex>
      </Flex>

      <Flex sx={{ pb: 8, width: 1 }}>
        {layout !== 'preview' && (
          <Flex
            sx={{
              justifyContent: 'center',
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
              justifyContent: 'center',
              pl: layout === 'split' ? 4 : 0,
              width: layout === 'split' ? 1 / 2 : 1,
            }}
          >
            <ResumePreview />
          </Flex>
        )}
      </Flex>
    </Flex>
  );
}

export default Dashboard;
