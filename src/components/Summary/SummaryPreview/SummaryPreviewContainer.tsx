import { useSummaryStore } from 'stores/useSummaryStore';
import SummaryPreview from './SummaryPreview';

function SummaryPreviewContainer() {
  const { summary } = useSummaryStore();

  return <SummaryPreview summary={summary} />;
}

export default SummaryPreviewContainer;
