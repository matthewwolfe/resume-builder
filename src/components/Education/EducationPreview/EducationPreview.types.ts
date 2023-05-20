import type { Education } from 'types/resume.types';

export interface ContainerProps extends SharedProps {}

export interface Props extends SharedProps {
  educations: Education[];
}

interface SharedProps {}
