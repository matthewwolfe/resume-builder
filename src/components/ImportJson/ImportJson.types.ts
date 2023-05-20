export interface ContainerProps extends SharedProps {}

export interface Props extends SharedProps {
  isOpen: boolean;
  json: string;
  onSubmit: (json: string) => void;
  setIsOpen: (isOpen: boolean) => void;
  setJson: (json: string) => void;
}

interface SharedProps {}
