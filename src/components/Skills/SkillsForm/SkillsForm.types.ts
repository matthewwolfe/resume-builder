export interface ContainerProps extends SharedProps {}

export interface Props extends SharedProps {
  skills: Array<string>;
  addSkill: (skill: string) => void;
  removeSkill: (index: number) => void;
}

interface SharedProps {}
