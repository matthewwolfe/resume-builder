import { useSummaryStore } from 'stores/useSummaryStore';
import SummaryForm from './SummaryForm';

function SummaryFormContainer() {
  const { summary, setSummary } = useSummaryStore();

  return <SummaryForm summary={summary} setSummary={setSummary} />;
}

export default SummaryFormContainer;
