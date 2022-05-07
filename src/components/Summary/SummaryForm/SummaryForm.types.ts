import type { FieldErrors, Control } from 'react-hook-form';
import type { Summary } from 'types/resume.types';

export interface ContainerProps extends SharedProps {}

export interface Props extends SharedProps {
  control: Control<Summary>;
  errors: FieldErrors<Summary>;
  onSubmit: () => void;
}

interface SharedProps {}
