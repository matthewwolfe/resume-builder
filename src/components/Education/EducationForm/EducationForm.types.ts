import { FieldErrors, Control, UseFormSetValue } from 'react-hook-form';
import type { Education } from 'types/resume.types';

export interface ContainerProps extends SharedProps {}

export interface Props extends SharedProps {
  control: Control<Education>;
  educations: Education[];
  errors: FieldErrors<Education>;
  onSubmit: () => void;
  removeEducation: (index: number) => void;
  setEditIndex: (index: number) => void;
  setValue: UseFormSetValue<Education>;
}

interface SharedProps {}
