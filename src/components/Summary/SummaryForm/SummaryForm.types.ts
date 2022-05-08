export interface ContainerProps extends SharedProps {}

export interface Props extends SharedProps {
  summary: string;
  setSummary: (summary: string) => void;
}

interface SharedProps {}
