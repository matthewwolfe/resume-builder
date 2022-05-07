import dynamic from 'next/dynamic';
import { useResumeBuilderStore } from 'stores/useResumeBuilderStore';

const Dashboard = dynamic(() => import('./Dashboard'), { ssr: false });

function DashboardContainer() {
  const { layout, setLayout } = useResumeBuilderStore();

  return <Dashboard layout={layout} setLayout={setLayout} />;
}

export default DashboardContainer;
