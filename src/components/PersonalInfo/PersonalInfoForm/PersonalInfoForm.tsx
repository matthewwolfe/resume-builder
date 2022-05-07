import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Controller } from 'react-hook-form';
import { Button, Flex, TextField } from 'design';
import { Props } from './PersonalInfoForm.types';

function PersonalInfoForm({ control, errors, onSubmit }: Props) {
  return (
    <form onSubmit={onSubmit}>
      <Grid container columnSpacing={6}>
        <Grid item xs={12}>
          <Typography fontWeight="bold" variant="h5">
            Personal Information
          </Typography>
        </Grid>

        <Grid item xs={6}>
          <Controller
            control={control}
            name="firstName"
            render={({ field }) => (
              <TextField
                {...field}
                error={errors.hasOwnProperty('firstName')}
                helperText={errors?.firstName?.message}
                placeholder="First Name"
              />
            )}
          />
        </Grid>

        <Grid item xs={6}>
          <Controller
            control={control}
            name="lastName"
            render={({ field }) => (
              <TextField
                {...field}
                error={errors.hasOwnProperty('lastName')}
                helperText={errors?.lastName?.message}
                placeholder="Last Name"
              />
            )}
          />
        </Grid>

        <Grid item xs={6}>
          <Controller
            control={control}
            name="email"
            render={({ field }) => (
              <TextField
                {...field}
                error={errors.hasOwnProperty('email')}
                helperText={errors?.email?.message}
                placeholder="Email"
              />
            )}
          />
        </Grid>

        <Grid item xs={6}>
          <Controller
            control={control}
            name="phoneNumber"
            render={({ field }) => (
              <TextField
                {...field}
                error={errors.hasOwnProperty('phoneNumber')}
                helperText={errors?.phoneNumber?.message}
                placeholder="Phone Number"
              />
            )}
          />
        </Grid>

        <Grid item xs={12} sx={{ mt: 6 }}>
          <Controller
            control={control}
            name="address1"
            render={({ field }) => (
              <TextField
                {...field}
                error={errors.hasOwnProperty('address1')}
                helperText={errors?.address1?.message}
                placeholder="Address Line 1"
              />
            )}
          />
        </Grid>

        <Grid item xs={12}>
          <Controller
            control={control}
            name="address2"
            render={({ field }) => (
              <TextField
                {...field}
                error={errors.hasOwnProperty('address2')}
                helperText={errors?.address2?.message}
                placeholder="Address Line 2"
              />
            )}
          />
        </Grid>

        <Grid item xs={3}>
          <Controller
            control={control}
            name="city"
            render={({ field }) => (
              <TextField
                {...field}
                error={errors.hasOwnProperty('city')}
                helperText={errors?.city?.message}
                placeholder="City"
              />
            )}
          />
        </Grid>

        <Grid item xs={3}>
          <Controller
            control={control}
            name="state"
            render={({ field }) => (
              <TextField
                {...field}
                error={errors.hasOwnProperty('state')}
                helperText={errors?.state?.message}
                placeholder="State"
              />
            )}
          />
        </Grid>

        <Grid item xs={3}>
          <Controller
            control={control}
            name="country"
            render={({ field }) => (
              <TextField
                {...field}
                error={errors.hasOwnProperty('country')}
                helperText={errors?.country?.message}
                placeholder="Country"
              />
            )}
          />
        </Grid>

        <Grid item xs={3}>
          <Controller
            control={control}
            name="zip"
            render={({ field }) => (
              <TextField
                {...field}
                error={errors.hasOwnProperty('zip')}
                helperText={errors?.zip?.message}
                placeholder="Zip/Postal Code"
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

export default PersonalInfoForm;
