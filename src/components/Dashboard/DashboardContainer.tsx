import { useResumeBuilderStore } from 'stores/useResumeBuilderStore';
import Dashboard from './Dashboard';

function DashboardContainer() {
  const { layout } = useResumeBuilderStore();

  return <Dashboard layout={layout} />;
}

export default DashboardContainer;
