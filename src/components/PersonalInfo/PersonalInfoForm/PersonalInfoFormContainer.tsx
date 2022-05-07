import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { usePersonalInfoStore } from 'stores/usePersonalInfoStore';
import PersonalInfoForm from './PersonalInfoForm';

import type { PersonalInfo } from 'types/resume.types';

const schema = yup.object().shape({
  firstName: yup.string().required().label('First Name'),
  lastName: yup.string().required().label('Last Name'),
  email: yup.string().email().required().label('Email'),
  phoneNumber: yup.string().required().label('Phone Number'),
  address1: yup.string().required().label('Address Line 1'),
  address2: yup.string().label('Address Line 2'),
  city: yup.string().required().label('City'),
  state: yup.string().required().label('State'),
  country: yup.string().required().label('Country'),
  zip: yup.string().required().label('Zip/Postal Code'),
});

function PersonalInfoFormContainer() {
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

  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<PersonalInfo>({
    defaultValues: {
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
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: PersonalInfo) => {
    setPersonalInfo(data);
  };

  return <PersonalInfoForm control={control} errors={errors} onSubmit={handleSubmit(onSubmit)} />;
}

export default PersonalInfoFormContainer;
