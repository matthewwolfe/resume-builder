import type { Layout } from 'stores/useResumeBuilderStore';

export interface ContainerProps extends SharedProps {}

export interface Props extends SharedProps {
  layout: Layout;
  setLayout: (layout: Layout) => void;
}

interface SharedProps {}
