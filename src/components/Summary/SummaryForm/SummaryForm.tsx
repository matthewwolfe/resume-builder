import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { TextField } from 'design';
import type { Props } from './SummaryForm.types';

function SummaryForm({ summary, setSummary }: Props) {
  return (
    <Grid container columnSpacing={6}>
      <Grid item xs={12}>
        <Typography fontWeight="bold" variant="h5">
          Summary
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <TextField
          multiline
          onChange={(e) => setSummary(e.currentTarget.value)}
          placeholder="Summary"
          value={summary}
        />
      </Grid>
    </Grid>
  );
}

export default SummaryForm;
