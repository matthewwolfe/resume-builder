import type { PersonalInfo } from 'types/resume.types';

export interface Props extends PersonalInfo {
  updatePersonalInfo: (personalInfo: Partial<PersonalInfo>) => void;
}
