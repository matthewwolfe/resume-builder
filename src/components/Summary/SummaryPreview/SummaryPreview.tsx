import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { Flex } from 'design';
import type { Props } from './SummaryPreview.types';

function SummaryPreview({ summary }: Props) {
  return (
    <Flex sx={{ flexDirection: 'column', width: 1 }}>
      <Typography sx={{ fontWeight: 'bold', mb: 1 }} variant="h5">
        Summary
      </Typography>

      <Divider sx={{ borderBottomWidth: 2, mb: 2 }} />

      <Typography variant="body1">{summary}</Typography>
    </Flex>
  );
}

export default SummaryPreview;
