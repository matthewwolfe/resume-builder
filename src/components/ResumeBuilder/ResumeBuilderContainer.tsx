import { useResumeBuilderStore } from 'stores/useResumeBuilderStore';
import ResumeBuilder from './ResumeBuilder';

function ResumeBuilderContainer() {
  const { layout } = useResumeBuilderStore();

  return <ResumeBuilder layout={layout} />;
}

export default ResumeBuilderContainer;
