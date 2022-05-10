import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { useWorkExperienceStore } from 'stores/useWorkExperienceStore';
import WorkExperienceForm from './WorkExperienceForm';

import type { WorkExperience } from 'types/resume.types';

const schema = yup.object().shape({
  organizationName: yup.string().required().label('Organization Name'),
  title: yup.string().required().label('Title'),
  summary: yup.string().required().label('Summary'),
});

function WorkExperienceFormContainer() {
  const { workExperiences, addWorkExperience, removeWorkExperience, updateWorkExperience } =
    useWorkExperienceStore();

  const [editIndex, setEditIndex] = useState<number>(-1);

  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
    setValue,
  } = useForm({
    defaultValues: {
      organizationName: '',
      title: '',
      startDate: '',
      endDate: '',
      currentEmployment: false,
      city: '',
      state: '',
      country: '',
      summary: '',
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = (workExperience: WorkExperience) => {
    if (editIndex === -1) {
      addWorkExperience(workExperience);
    } else {
      updateWorkExperience(workExperience, editIndex);
    }

    setEditIndex(-1);
    reset();
  };

  return (
    <WorkExperienceForm
      control={control}
      errors={errors}
      onSubmit={handleSubmit(onSubmit)}
      removeWorkExperience={removeWorkExperience}
      setEditIndex={setEditIndex}
      setValue={setValue}
      workExperiences={workExperiences}
    />
  );
}

export default WorkExperienceFormContainer;
