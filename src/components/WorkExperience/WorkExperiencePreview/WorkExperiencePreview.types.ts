import type { WorkExperience } from 'types/resume.types';

export interface ContainerProps extends SharedProps {}

export interface Props extends SharedProps {
  workExperiences: WorkExperience[];
}

interface SharedProps {}
