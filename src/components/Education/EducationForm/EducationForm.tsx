import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { Fragment } from 'react';
import { Controller } from 'react-hook-form';
import { Button, Flex, TextField } from 'design';

import type { Props } from './EducationForm.types';

function EducationForm({
  control,
  educations,
  errors,
  onSubmit,
  removeEducation,
  setEditIndex,
  setValue,
}: Props) {
  return (
    <form onSubmit={onSubmit} style={{ width: '100%' }}>
      <Grid container columnSpacing={6}>
        <Grid item xs={12}>
          <Typography fontWeight="bold" variant="h5">
            Education
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <List>
            {educations.map((educations, index) => {
              const { institution, degree } = educations;

              return (
                <Fragment key={index}>
                  <ListItem
                    disablePadding
                    secondaryAction={
                      <>
                        <IconButton
                          edge="end"
                          sx={{ mr: 1 }}
                          onClick={() => {
                            (Object.keys(educations) as Array<keyof typeof educations>).forEach(
                              (prop) => setValue(prop, educations[prop]),
                            );

                            setEditIndex(index);
                          }}
                        >
                          <EditIcon />
                        </IconButton>

                        <IconButton edge="end" onClick={() => removeEducation(index)}>
                          <DeleteIcon />
                        </IconButton>
                      </>
                    }
                  >
                    <ListItemButton>
                      <ListItemText primary={`${index + 1}. ${institution} | ${degree}`} />
                    </ListItemButton>
                  </ListItem>

                  <Divider />
                </Fragment>
              );
            })}
          </List>
        </Grid>

        <Grid item xs={5}>
          <Controller
            control={control}
            name="institution"
            render={({ field: { onChange, value } }) => (
              <TextField
                error={errors.hasOwnProperty('institution')}
                helperText={errors?.institution?.message}
                onChange={onChange}
                placeholder="Institution"
                value={value}
              />
            )}
          />
        </Grid>

        <Grid item xs={4}>
          <Controller
            control={control}
            name="degree"
            render={({ field: { onChange, value } }) => (
              <TextField
                error={errors.hasOwnProperty('degree')}
                helperText={errors?.degree?.message}
                onChange={onChange}
                placeholder="Degree"
                value={value}
              />
            )}
          />
        </Grid>

        <Grid item xs={3}>
          <Controller
            control={control}
            name="graduationDate"
            render={({ field: { onChange, value } }) => (
              <TextField
                error={errors.hasOwnProperty('graduationDate')}
                helperText={errors?.graduationDate?.message}
                onChange={onChange}
                placeholder="Graduation Date"
                value={value}
              />
            )}
          />
        </Grid>

        <Grid item xs={4}>
          <Controller
            control={control}
            name="city"
            render={({ field: { onChange, value } }) => (
              <TextField
                error={errors.hasOwnProperty('city')}
                helperText={errors?.city?.message}
                onChange={onChange}
                placeholder="City"
                value={value}
              />
            )}
          />
        </Grid>

        <Grid item xs={4}>
          <Controller
            control={control}
            name="state"
            render={({ field: { onChange, value } }) => (
              <TextField
                error={errors.hasOwnProperty('state')}
                helperText={errors?.state?.message}
                onChange={onChange}
                placeholder="State"
                value={value}
              />
            )}
          />
        </Grid>

        <Grid item xs={4}>
          <Controller
            control={control}
            name="country"
            render={({ field: { onChange, value } }) => (
              <TextField
                error={errors.hasOwnProperty('country')}
                helperText={errors?.country?.message}
                onChange={onChange}
                placeholder="Country"
                value={value}
              />
            )}
          />
        </Grid>

        <Grid item xs={12}>
          <Controller
            control={control}
            name="summary"
            render={({ field: { onChange, value } }) => (
              <TextField
                error={errors.hasOwnProperty('summary')}
                helperText={errors?.summary?.message}
                multiline
                minRows={5}
                maxRows={5}
                onChange={(e) => onChange(e.currentTarget.value)}
                placeholder="Summary of your accomplishments"
                value={value}
              />
            )}
          />
        </Grid>

        <Grid item xs={12}>
          <Flex sx={{ justifyContent: 'flex-end', mt: 6 }}>
            <Button type="submit">Save</Button>
          </Flex>
        </Grid>
      </Grid>
    </form>
  );
}

export default EducationForm;
