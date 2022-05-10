import { useEducationStore } from 'stores/useEducationStore';
import EducationPreview from './EducationPreview';

function EducationContainer() {
  const { educations } = useEducationStore();

  return <EducationPreview educations={educations} />;
}

export default EducationContainer;
