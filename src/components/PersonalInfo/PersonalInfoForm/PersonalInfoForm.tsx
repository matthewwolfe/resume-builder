import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { TextField } from 'design';

import type { Props } from './PersonalInfoForm.types';

function PersonalInfoForm({
  firstName,
  lastName,
  email,
  phoneNumber,
  links,
  address1,
  address2,
  city,
  state,
  country,
  zip,
  updatePersonalInfo,
}: Props) {
  return (
    <Grid container columnSpacing={6}>
      <Grid item xs={12}>
        <Typography fontWeight="bold" variant="h5">
          Personal Information
        </Typography>
      </Grid>

      <Grid item xs={6}>
        <TextField
          onChange={(e) => updatePersonalInfo({ firstName: e.currentTarget.value })}
          placeholder="First Name"
          value={firstName}
        />
      </Grid>

      <Grid item xs={6}>
        <TextField
          onChange={(e) => updatePersonalInfo({ lastName: e.currentTarget.value })}
          placeholder="Last Name"
          value={lastName}
        />
      </Grid>

      <Grid item xs={6}>
        <TextField
          onChange={(e) => updatePersonalInfo({ email: e.currentTarget.value })}
          placeholder="Email"
          value={email}
        />
      </Grid>

      <Grid item xs={6}>
        <TextField
          onChange={(e) => updatePersonalInfo({ phoneNumber: e.currentTarget.value })}
          placeholder="Phone Number"
          value={phoneNumber}
        />
      </Grid>

      <Grid item xs={12}>
        <TextField
          multiline
          minRows={3}
          maxRows={5}
          onChange={(e) => updatePersonalInfo({ links: e.currentTarget.value })}
          placeholder="Links"
          value={links}
        />
      </Grid>

      <Grid item xs={12} sx={{ mt: 6 }}>
        <TextField
          onChange={(e) => updatePersonalInfo({ address1: e.currentTarget.value })}
          placeholder="Address Line 1"
          value={address1}
        />
      </Grid>

      <Grid item xs={12}>
        <TextField
          onChange={(e) => updatePersonalInfo({ address2: e.currentTarget.value })}
          placeholder="Address Line 2"
          value={address2}
        />
      </Grid>

      <Grid item xs={3}>
        <TextField
          onChange={(e) => updatePersonalInfo({ city: e.currentTarget.value })}
          placeholder="City"
          value={city}
        />
      </Grid>

      <Grid item xs={3}>
        <TextField
          onChange={(e) => updatePersonalInfo({ state: e.currentTarget.value })}
          placeholder="State"
          value={state}
        />
      </Grid>

      <Grid item xs={3}>
        <TextField
          onChange={(e) => updatePersonalInfo({ country: e.currentTarget.value })}
          placeholder="Country"
          value={country}
        />
      </Grid>

      <Grid item xs={3}>
        <TextField
          onChange={(e) => updatePersonalInfo({ zip: e.currentTarget.value })}
          placeholder="Zip/Postal Code"
          value={zip}
        />
      </Grid>
    </Grid>
  );
}

export default PersonalInfoForm;
