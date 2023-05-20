import { usePersonalInfoStore } from 'stores/usePersonalInfoStore';
import PersonalInfoPreview from './PersonalInfoPreview';

function PersonalInfoPreviewContainer() {
  const {
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
  } = usePersonalInfoStore();

  return (
    <PersonalInfoPreview
      firstName={firstName}
      lastName={lastName}
      email={email}
      phoneNumber={phoneNumber}
      links={links}
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
