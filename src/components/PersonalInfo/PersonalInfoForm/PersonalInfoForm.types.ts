import type { FieldErrors, Control } from 'react-hook-form';
import type { PersonalInfo } from 'types/resume.types';

export interface ContainerProps extends SharedProps {}

export interface Props extends SharedProps {
  control: Control<PersonalInfo>;
  errors: FieldErrors<PersonalInfo>;
  onSubmit: () => void;
}

interface SharedProps {}
