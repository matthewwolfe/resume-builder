import { FieldErrors, Control, UseFormSetValue } from 'react-hook-form';
import type { WorkExperience } from 'types/resume.types';

export interface ContainerProps extends SharedProps {}

export interface Props extends SharedProps {
  control: Control<WorkExperience>;
  errors: FieldErrors<WorkExperience>;
  onSubmit: () => void;
  removeWorkExperience: (index: number) => void;
  setValue: UseFormSetValue<WorkExperience>;
  workExperiences: Array<WorkExperience>;
}

interface SharedProps {}
