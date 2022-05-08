import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Flex, TextField } from 'design';
import { Props } from './WorkExperienceForm.types';

function WorkExperienceForm({ workExperiences }: Props) {
  return (
    <Grid container columnSpacing={6}>
      <Grid item xs={12}>
        <Typography fontWeight="bold" variant="h5">
          Work Experience
        </Typography>
      </Grid>

      <Grid item xs={6}>
        <TextField placeholder="Organization Name" />
      </Grid>

      <Grid item xs={6}>
        <TextField placeholder="Title" />
      </Grid>

      <Grid item xs={4}>
        <TextField placeholder="Start Date" />
      </Grid>

      <Grid item xs={4}>
        <TextField placeholder="End Date" />
      </Grid>

      <Grid item xs={4} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <Flex sx={{ justifyContent: 'center' }}>
          <FormControlLabel control={<Checkbox />} label="Current Employment" />
        </Flex>
      </Grid>

      <Grid item xs={4}>
        <TextField placeholder="City" />
      </Grid>

      <Grid item xs={4}>
        <TextField placeholder="State" />
      </Grid>

      <Grid item xs={4}>
        <TextField placeholder="Country" />
      </Grid>

      <Grid item xs={12}>
        <TextField multiline placeholder="Summary of your respnsibilities and accomplishments" />
      </Grid>
    </Grid>
  );
}

export default WorkExperienceForm;
