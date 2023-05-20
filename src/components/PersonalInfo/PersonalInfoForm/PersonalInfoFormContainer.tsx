import { usePersonalInfoStore } from 'stores/usePersonalInfoStore';
import PersonalInfoForm from './PersonalInfoForm';

function PersonalInfoFormContainer() {
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
    updatePersonalInfo,
  } = usePersonalInfoStore();

  return (
    <PersonalInfoForm
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
      updatePersonalInfo={updatePersonalInfo}
    />
  );
}

export default PersonalInfoFormContainer;
