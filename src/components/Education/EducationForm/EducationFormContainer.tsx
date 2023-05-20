import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { useEducationStore } from 'stores/useEducationStore';
import EducationForm from './EducationForm';

import type { Education } from 'types/resume.types';

const schema = yup.object().shape({
  institution: yup.string().required().label('Institution'),
  degree: yup.string().required().label('Degree'),
  graduationDate: yup.string().required().label('Graduation Date'),
  summary: yup.string().label('Summary'),
});

function EducationFormContainer() {
  const { educations, addEducation, removeEducation, updateEducation } = useEducationStore();

  const [editIndex, setEditIndex] = useState<number>(-1);

  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
    setValue,
  } = useForm({
    defaultValues: {
      institution: '',
      degree: '',
      city: '',
      state: '',
      country: '',
      graduationDate: '',
      summary: '',
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = (education: Education) => {
    if (editIndex === -1) {
      addEducation(education);
    } else {
      updateEducation(education, editIndex);
    }

    setEditIndex(-1);
    reset();
  };

  return (
    <EducationForm
      control={control}
      educations={educations}
      errors={errors}
      onSubmit={handleSubmit(onSubmit)}
      removeEducation={removeEducation}
      setEditIndex={setEditIndex}
      setValue={setValue}
    />
  );
}

export default EducationFormContainer;
