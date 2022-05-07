import type { PersonalInfo } from 'types/resume.types';

export interface ContainerProps extends SharedProps {}

export interface Props extends PersonalInfo, SharedProps {}

interface SharedProps {}
