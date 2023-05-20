import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Checkbox from '@mui/material/Checkbox';
import Divider from '@mui/material/Divider';
import FormControlLabel from '@mui/material/FormControlLabel';
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

import type { Props } from './WorkExperienceForm.types';

function WorkExperienceForm({
  control,
  errors,
  onSubmit,
  removeWorkExperience,
  setEditIndex,
  setValue,
  workExperiences,
}: Props) {
  return (
    <form onSubmit={onSubmit} style={{ width: '100%' }}>
      <Grid container columnSpacing={6}>
        <Grid item xs={12}>
          <Typography fontWeight="bold" variant="h5">
            Work Experience
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <List>
            {workExperiences.map((workExperience, index) => {
              const { organizationName, title } = workExperience;

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
                            (
                              Object.keys(workExperience) as Array<keyof typeof workExperience>
                            ).forEach((prop) => setValue(prop, workExperience[prop]));

                            setEditIndex(index);
                          }}
                        >
                          <EditIcon />
                        </IconButton>

                        <IconButton edge="end" onClick={() => removeWorkExperience(index)}>
                          <DeleteIcon />
                        </IconButton>
                      </>
                    }
                  >
                    <ListItemButton>
                      <ListItemText primary={`${index + 1}. ${organizationName} | ${title}`} />
                    </ListItemButton>
                  </ListItem>

                  <Divider />
                </Fragment>
              );
            })}
          </List>
        </Grid>

        <Grid item xs={6}>
          <Controller
            control={control}
            name="organizationName"
            render={({ field: { onChange, value } }) => (
              <TextField
                error={errors.hasOwnProperty('organizationName')}
                helperText={errors?.organizationName?.message}
                onChange={onChange}
                placeholder="Organization Name"
                value={value}
              />
            )}
          />
        </Grid>

        <Grid item xs={6}>
          <Controller
            control={control}
            name="title"
            render={({ field: { onChange, value } }) => (
              <TextField
                error={errors.hasOwnProperty('title')}
                helperText={errors?.title?.message}
                onChange={onChange}
                placeholder="Title"
                value={value}
              />
            )}
          />
        </Grid>

        <Grid item xs={4}>
          <Controller
            control={control}
            name="startDate"
            render={({ field: { onChange, value } }) => (
              <TextField
                error={errors.hasOwnProperty('startDate')}
                helperText={errors?.startDate?.message}
                onChange={onChange}
                placeholder="Start Date"
                value={value}
              />
            )}
          />
        </Grid>

        <Grid item xs={4}>
          <Controller
            control={control}
            name="endDate"
            render={({ field: { onChange, value } }) => (
              <TextField
                error={errors.hasOwnProperty('endDate')}
                helperText={errors?.endDate?.message}
                onChange={onChange}
                placeholder="End Date"
                value={value}
              />
            )}
          />
        </Grid>

        <Grid
          item
          xs={4}
          sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
        >
          <Flex sx={{ justifyContent: 'center' }}>
            <Controller
              control={control}
              name="currentEmployment"
              render={({ field: { onChange, value } }) => (
                <FormControlLabel
                  control={
                    <Checkbox checked={value} onChange={(e) => onChange(e.currentTarget.checked)} />
                  }
                  label="Current Employment"
                />
              )}
            />
          </Flex>
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
                placeholder="Summary of your respnsibilities and accomplishments"
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

export default WorkExperienceForm;
