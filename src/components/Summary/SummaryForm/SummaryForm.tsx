import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Controller } from 'react-hook-form';
import { Button, Flex, TextField } from 'design';
import { Props } from './SummaryForm.types';

function SummaryForm({ control, errors, onSubmit }: Props) {
  return (
    <form onSubmit={onSubmit} style={{ width: '100%' }}>
      <Grid container columnSpacing={6}>
        <Grid item xs={12}>
          <Typography fontWeight="bold" variant="h5">
            Summary
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Controller
            control={control}
            name="summary"
            render={({ field }) => (
              <TextField
                {...field}
                error={errors.hasOwnProperty('summary')}
                helperText={errors?.summary?.message}
                multiline
                placeholder="Summary"
              />
            )}
          />
        </Grid>
      </Grid>

      <Flex sx={{ justifyContent: 'flex-end', mt: 6 }}>
        <Button type="submit">Save</Button>
      </Flex>
    </form>
  );
}

export default SummaryForm;
