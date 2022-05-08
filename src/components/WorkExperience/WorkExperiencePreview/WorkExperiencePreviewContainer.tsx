import { useWorkExperienceStore } from 'stores/useWorkExperienceStore';
import WorkExperiencePreview from './WorkExperiencePreview';

function WorkExperiencePreviewContainer() {
  const { workExperiences } = useWorkExperienceStore();

  return <WorkExperiencePreview workExperiences={workExperiences} />;
}

export default WorkExperiencePreviewContainer;
