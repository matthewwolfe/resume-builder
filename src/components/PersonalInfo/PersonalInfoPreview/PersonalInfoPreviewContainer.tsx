import { usePersonalInfoStore } from 'stores/usePersonalInfoStore';
import PersonalInfoPreview from './PersonalInfoPreview';

import { ContainerProps } from './PersonalInfoPreview.types';

function PersonalInfoPreviewContainer() {
  const {
    firstName,
    lastName,
    email,
    phoneNumber,
    address1,
    address2,
    city,
    state,
    country,
    zip,
    setPersonalInfo,
  } = usePersonalInfoStore();

  return (
    <PersonalInfoPreview
      firstName={firstName}
      lastName={lastName}
      email={email}
      phoneNumber={phoneNumber}
      address1={address1}
      address2={address2}
      city={city}
      state={state}
      country={country}
      zip={zip}
    />
  );
}

export default PersonalInfoPreviewContainer;
